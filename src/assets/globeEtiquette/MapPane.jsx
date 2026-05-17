import { useEffect, useRef, useCallback, useState } from "react";
import { TILES } from "./data";
import { getEffectiveTileTheme } from "./helpers";
import { t } from "./i18n";

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

export default function MapPane({ lang, theme, onCountryOpen, mapRef, geoLayerRef }) {
  const containerRef = useRef(null);
  const leafletLoadedRef = useRef(false);
  const hoverTimerRef = useRef(null);
  const [loading, setLoading] = useState(true);

  const effectiveTileTheme = useCallback(() => getEffectiveTileTheme(theme), [theme]);

  const applyTheme = useCallback(() => {
    if (!geoLayerRef.current) return;
    geoLayerRef.current.setStyle(() => {
      const t = TILES[effectiveTileTheme()];
      return { weight: 0, stroke: false, fillColor: t.fill, fillOpacity: 1 };
    });
  }, [effectiveTileTheme, geoLayerRef]);

  useEffect(() => {
    if (leafletLoadedRef.current) applyTheme();
  }, [theme, applyTheme]);

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
      L.control.zoom({ position: "bottomright" }).addTo(map);

      fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
        .then(r => r.json())
        .then(geojson => {
          setLoading(false);
          const layer = L.geoJSON(fixAntimeridian(geojson), {
            style: () => {
              const th = TILES[getEffectiveTileTheme(document.documentElement.getAttribute("data-theme") || "night")];
              return { weight: 0, stroke: false, fillColor: th.fill, fillOpacity: 1 };
            },
            onEachFeature: (f, l) => {
              const name = f.properties.ADMIN || f.properties.name;
              l.on({
                mouseover: () => {
                  clearTimeout(hoverTimerRef.current);
                  hoverTimerRef.current = setTimeout(() => onCountryOpen(name, null), 350);
                },
                mouseout: () => clearTimeout(hoverTimerRef.current),
                click:    e => onCountryOpen(name, e.target.getBounds()),
              });
            },
          }).addTo(map);
          geoLayerRef.current = layer;
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
