import { useEffect, useRef, useCallback } from "react";
import { TILES } from "./data";
import { getEffectiveTileTheme } from "./helpers";

export default function MapPane({ theme, onCountryClick, mapRef, geoLayerRef }) {
  const containerRef = useRef(null);
  const baseTileRef = useRef(null);
  const labelTileRef = useRef(null);
  const leafletLoadedRef = useRef(false);

  const effectiveTileTheme = useCallback(() => getEffectiveTileTheme(theme), [theme]);

  const applyTiles = useCallback(() => {
    const L = window.L;
    const map = mapRef.current;
    if (!L || !map) return;
    const th = TILES[effectiveTileTheme()];
    if (baseTileRef.current) map.removeLayer(baseTileRef.current);
    if (labelTileRef.current) map.removeLayer(labelTileRef.current);
    baseTileRef.current = L.tileLayer(th.base, { attribution: "©OpenStreetMap ©CARTO", subdomains: "abcd", maxZoom: 20 }).addTo(map);
    labelTileRef.current = L.tileLayer(th.labels, { subdomains: "abcd", maxZoom: 20, pane: "labelsPane" }).addTo(map);
    if (geoLayerRef.current) {
      geoLayerRef.current.setStyle(() => {
        const t = TILES[effectiveTileTheme()];
        return { color: t.stroke, weight: 0.8, fillColor: t.fill, fillOpacity: 0.55, opacity: 0.8 };
      });
    }
  }, [effectiveTileTheme, mapRef, geoLayerRef]);

  useEffect(() => {
    if (leafletLoadedRef.current) applyTiles();
  }, [theme, applyTiles]);

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
        maxBoundsViscosity: 1.0
      });
      mapRef.current = map;

      map.createPane("labelsPane");
      map.getPane("labelsPane").style.zIndex = 650;
      map.getPane("labelsPane").style.pointerEvents = "none";
      L.control.zoom({ position: "bottomright" }).addTo(map);

      applyTiles();

      fetch("https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson")
        .then(r => r.json())
        .then(geojson => {
          const layer = L.geoJSON(geojson, {
            style: () => {
              const th = TILES[getEffectiveTileTheme(document.documentElement.getAttribute("data-theme") || "night")];
              return { color: th.stroke, weight: 0.8, fillColor: th.fill, fillOpacity: 0.55, opacity: 0.8 };
            },
            onEachFeature: (f, l) => {
              const name = f.properties.ADMIN || f.properties.name;
              l.on({
                mouseover: e => {
                  const th = TILES[getEffectiveTileTheme(document.documentElement.getAttribute("data-theme") || "night")];
                  e.target.setStyle({ fillColor: th.hover, fillOpacity: 0.7 });
                  e.target.bindTooltip(name, { permanent: false, className: "ge-map-tooltip" }).openTooltip();
                },
                mouseout: e => { layer.resetStyle(e.target); e.target.closeTooltip(); },
                click: e => onCountryClick(name, e.target.getBounds())
              });
            }
          }).addTo(map);
          geoLayerRef.current = layer;
        })
        .catch(() => {});
    };

    if (window.L) {
      initMap();
    } else {
      const script = document.createElement("script");
      script.src = "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.9.4/leaflet.min.js";
      script.onload = initMap;
      document.head.appendChild(script);
    }
  }, [applyTiles, geoLayerRef, mapRef, onCountryClick]);

  return <div id="ge-map" ref={containerRef} style={{ flex: 1, zIndex: 1 }} />;
}
