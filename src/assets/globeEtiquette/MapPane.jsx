import { useEffect, useRef, useCallback, useState } from "react";
import { TILES, COUNTRY_ISO3 } from "./data";
import { getEffectiveTileTheme } from "./helpers";
import { t } from "./i18n";

let adminGeoCache = null;
async function fetchAdminGeo() {
  if (adminGeoCache) return adminGeoCache;
  const r = await fetch(
    "https://raw.githubusercontent.com/nvkelso/natural-earth-vector/master/geojson/ne_10m_admin_1_states_provinces.geojson"
  );
  adminGeoCache = await r.json();
  return adminGeoCache;
}

function shiftGeoJSON(geojson, offset) {
  function shiftCoord(coord) { return [coord[0] + offset, coord[1]]; }
  function shiftRing(ring) { return ring.map(shiftCoord); }
  function shiftCoords(coords, depth) {
    return depth === 0 ? shiftRing(coords) : coords.map(c => shiftCoords(c, depth - 1));
  }
  function shiftGeom(geom) {
    if (!geom) return geom;
    if (geom.type === "Polygon")      return { ...geom, coordinates: shiftCoords(geom.coordinates, 1) };
    if (geom.type === "MultiPolygon") return { ...geom, coordinates: shiftCoords(geom.coordinates, 2) };
    return geom;
  }
  return { ...geojson, features: geojson.features.map(f => ({ ...f, geometry: shiftGeom(f.geometry) })) };
}

function fixAntimeridian(geojson) {
  function fixRing(ring) {
    return ring.reduce((acc, coord, i) => {
      if (i === 0) return [coord];
      const prev = acc[i - 1];
      let lng = coord[0];
      const diff = lng - prev[0];
      if (diff > 180) lng -= 360;
      else if (diff < -180) lng += 360;
      acc.push([lng, coord[1]]);
      return acc;
    }, []);
  }
  function fixCoords(coords, depth) {
    return depth === 0 ? fixRing(coords) : coords.map(c => fixCoords(c, depth - 1));
  }
  function fixGeom(geom) {
    if (!geom) return geom;
    if (geom.type === "Polygon")      return { ...geom, coordinates: fixCoords(geom.coordinates, 1) };
    if (geom.type === "MultiPolygon") return { ...geom, coordinates: fixCoords(geom.coordinates, 2) };
    return geom;
  }
  return { ...geojson, features: geojson.features.map(f => ({ ...f, geometry: fixGeom(f.geometry) })) };
}

export default function MapPane({ lang, theme, onCountryOpen, mapRef, geoLayerRef, initialCountry, activeCountry, onRegionOpen }) {
  const containerRef = useRef(null);
  const leafletLoadedRef = useRef(false);
  const initialCountryRef = useRef(initialCountry);
  const adminLayerRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [mapReady, setMapReady] = useState(false);

  const effectiveTileTheme = useCallback(() => getEffectiveTileTheme(theme), [theme]);

  const applyTheme = useCallback(() => {
    const th = TILES[effectiveTileTheme()];
    const layers = Array.isArray(geoLayerRef.current) ? geoLayerRef.current : geoLayerRef.current ? [geoLayerRef.current] : [];
    layers.forEach(layer => {
      layer.setStyle(() => ({
        weight: 1.2, stroke: true, color: th.border, fillColor: th.fill, fillOpacity: 1,
      }));
    });
  }, [effectiveTileTheme, geoLayerRef]);

  useEffect(() => {
    if (leafletLoadedRef.current) applyTheme();
  }, [theme, applyTheme]);

  // Load state/province boundaries when a country is selected
  useEffect(() => {
    const map = mapRef.current;

    if (adminLayerRef.current && map) {
      map.removeLayer(adminLayerRef.current);
      adminLayerRef.current = null;
    }

    if (!activeCountry || !mapReady || !map) return;

    const iso3 = COUNTRY_ISO3[activeCountry];
    if (!iso3) return;

    const th = TILES[getEffectiveTileTheme(document.documentElement.getAttribute("data-theme") || "night")];

    fetchAdminGeo().then(geo => {
      if (!mapRef.current) return;
      const filtered = {
        ...geo,
        features: geo.features.filter(f => f.properties.adm0_a3 === iso3),
      };
      if (!filtered.features.length) return;

      const layer = window.L.geoJSON(filtered, {
        style: {
          weight: 1.5,
          color: th.hover,
          opacity: 0.4,
          fillColor: "transparent",
          fillOpacity: 0,
          dashArray: "5 4",
        },
        onEachFeature: (f, l) => {
          const regionName = f.properties.name || f.properties.NAME_1 || "";
          l.bindTooltip(regionName, { sticky: true, className: "ge-admin-tooltip" });
          l.on("click", () => {
            if (onRegionOpen) onRegionOpen(regionName, activeCountry);
          });
          l.on("mouseover", () => l.setStyle({ weight: 2, opacity: 0.8, fillOpacity: 0.1, fillColor: th.hover }));
          l.on("mouseout",  () => l.setStyle({ weight: 1.5, opacity: 0.4, fillOpacity: 0, fillColor: "transparent" }));
        },
      });
      layer.addTo(mapRef.current);
      adminLayerRef.current = layer;
    }).catch(() => {});
  }, [activeCountry, mapReady, mapRef, onRegionOpen]);

  useEffect(() => {
    if (leafletLoadedRef.current) return;

    const initMap = () => {
      const L = window.L;
      if (!L || !containerRef.current || mapRef.current) return;

      leafletLoadedRef.current = true;
      const PAN_BOUNDS = L.latLngBounds(L.latLng(-85, -1000000), L.latLng(85, 1000000));
      const map = L.map(containerRef.current, {
        center: [20, 0], zoom: 2, minZoom: 2, maxZoom: 10,
        zoomControl: false,
        worldCopyJump: true,
        maxBounds: PAN_BOUNDS,
        maxBoundsViscosity: 1.0,
      });
      mapRef.current = map;
      setMapReady(true);
      L.control.zoom({ position: "bottomright" }).addTo(map);

      fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
        .then(r => r.json())
        .then(geojson => {
          setLoading(false);
          const th = TILES[getEffectiveTileTheme(document.documentElement.getAttribute("data-theme") || "night")];
          const fixed = fixAntimeridian(geojson);

          const styleOpts = () => ({ weight: 1.2, stroke: true, color: th.border, fillColor: th.fill, fillOpacity: 1 });

          const makeLayer = (data) => L.geoJSON(data, {
            style: styleOpts,
            onEachFeature: (f, l) => {
              const name = f.properties.ADMIN || f.properties.name;
              const b = l.getBounds();
              const area = (b.getNorth() - b.getSouth()) * (b.getEast() - b.getWest());
              let minZoom, sizeClass;
              if (area > 500)      { minZoom = 2; sizeClass = "xl"; }
              else if (area > 100) { minZoom = 3; sizeClass = "lg"; }
              else if (area > 20)  { minZoom = 4; sizeClass = "md"; }
              else                 { minZoom = 5; sizeClass = "sm"; }
              l._labelMinZoom = minZoom;
              l.bindTooltip(name, {
                permanent: true, direction: "center",
                className: `ge-country-label ge-country-label-${sizeClass}`, opacity: 1,
              });
              l.on({ click: e => onCountryOpen(name, e.target.getBounds()) });
            },
          });

          const layer      = makeLayer(fixed).addTo(map);
          const leftLayer  = makeLayer(shiftGeoJSON(fixed, -360)).addTo(map);
          const rightLayer = makeLayer(shiftGeoJSON(fixed,  360)).addTo(map);
          geoLayerRef.current = [layer, leftLayer, rightLayer];

          // Zoom to deeplink country after GeoJSON is ready (center layer only)
          if (initialCountryRef.current) {
            const target = initialCountryRef.current.toLowerCase();
            let found = false;
            layer.eachLayer(sublayer => {
              if (found) return;
              const geoName = (sublayer.feature.properties.ADMIN || sublayer.feature.properties.name || "").toLowerCase();
              if (geoName === target || geoName.includes(target) || target.includes(geoName)) {
                found = true;
                const bounds = sublayer.getBounds();
                const rawZoom = map.getBoundsZoom(bounds);
                if (rawZoom < 3) {
                  map.setView(bounds.getCenter(), 3);
                } else {
                  map.fitBounds(bounds, { paddingTopLeft: [60, 60], paddingBottomRight: [480, 60] });
                }
              }
            });
          }

          const syncLabels = () => {
            const zoom = map.getZoom();
            [layer, leftLayer, rightLayer].forEach(gl => {
              gl.eachLayer(sublayer => {
                const tt = sublayer.getTooltip();
                if (!tt) return;
                const el = tt.getElement();
                if (el) el.style.display = zoom >= (sublayer._labelMinZoom ?? 4) ? "" : "none";
              });
            });
          };
          map.on("zoomend", syncLabels);
          syncLabels();
        })
        .catch(() => setLoading(false));
    };

    if (window.L) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [applyTheme, geoLayerRef, mapRef, onCountryOpen]);

  return (
    <div style={{ flex: 1, position: "relative", zIndex: 1 }}>
      <div id="ge-map" ref={containerRef} style={{ position: "absolute", inset: 0 }} />
      {loading && (
        <div className="ge-map-loading">
          <div className="ge-map-spinner" />
          <span>{t(lang, "loading")}</span>
        </div>
      )}
    </div>
  );
}
