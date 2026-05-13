import { useState, useEffect, useRef, useCallback } from "react";
import "./assets/globeEtiquette/styles.css";
import { DATA, COUNTRY_COORDS, TILES } from "./assets/globeEtiquette/data";
import { getEffectiveTileTheme } from "./assets/globeEtiquette/helpers";
import SearchBox from "./assets/globeEtiquette/SearchBox";
import MapPane from "./assets/globeEtiquette/MapPane";
import SidePanel from "./assets/globeEtiquette/SidePanel";

export default function App() {
  const [theme, setThemeState] = useState("night");
  const [panelState, setPanelState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const country = params.get("country");
    const match = country ? Object.keys(DATA).find(k => k.toLowerCase() === country.toLowerCase()) : null;
    if (match) return { open: true, country: match, region: null, isRegionView: false };
    return { open: false, country: null, region: null, isRegionView: false };
  });
  const [activeTab, setActiveTab] = useState("guide");
  const [zoomed, setZoomed] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return !!params.get("country");
  });
  const mapRef = useRef(null);
  const geoLayerRef = useRef(null);

  // Apply data-theme to <html>
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // Sync country to URL
  useEffect(() => {
    const url = new URL(window.location.href);
    if (panelState.country) {
      url.searchParams.set("country", panelState.country);
    } else {
      url.searchParams.delete("country");
    }
    window.history.replaceState(null, "", url);
  }, [panelState.country]);

  const setTheme = (t) => setThemeState(t);

  const findLayerByName = useCallback((name) => {
    let found = null;
    geoLayerRef.current?.eachLayer(l => {
      const n = l.feature?.properties?.ADMIN || l.feature?.properties?.name || "";
      if (n.toLowerCase() === name.toLowerCase()) found = l;
    });
    return found;
  }, []);

  const highlightCountry = useCallback((name) => {
    const l = findLayerByName(name);
    if (l) {
      const th = TILES[getEffectiveTileTheme(theme)];
      l.setStyle({ fillColor: th.hover, fillOpacity: 0.75, weight: 1.5 });
    }
  }, [findLayerByName, theme]);

  const unhighlightCountry = useCallback((name) => {
    const l = findLayerByName(name);
    if (l) geoLayerRef.current?.resetStyle(l);
  }, [findLayerByName]);

  const openCountry = useCallback((name, bounds) => {
    const match = Object.keys(DATA).find(k => k.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(k.toLowerCase()));
    if (bounds) mapRef.current?.fitBounds(bounds, { padding: [40, 40] });
    setZoomed(true);
    if (match) {
      setPanelState({ open: true, country: match, region: null, isRegionView: false });
    } else {
      setPanelState({ open: true, country: name, region: null, isRegionView: false });
    }
    setActiveTab("guide");
  }, []);

  const openRegion = useCallback((region, country) => {
    setPanelState({ open: true, country, region, isRegionView: true });
    setActiveTab("guide");
  }, []);

  const closePanel = useCallback(() => {
    setPanelState(s => ({ ...s, open: false }));
  }, []);

  const resetView = useCallback(() => {
    mapRef.current?.setView([20, 0], 2);
    setZoomed(false);
    setPanelState({ open: false, country: null, region: null, isRegionView: false });
  }, []);

  const handleSearchSelect = useCallback((item) => {
    if (item.type === "country") {
      const coords = COUNTRY_COORDS[item.name];
      if (coords) mapRef.current?.setView([coords[0], coords[1]], coords[2]);
      setZoomed(true);
      setPanelState({ open: true, country: item.name, region: null, isRegionView: false });
      setActiveTab("guide");
    } else {
      const coords = COUNTRY_COORDS[item.country];
      if (coords) mapRef.current?.setView([coords[0], coords[1]], coords[2]);
      setZoomed(true);
      openRegion(item.name, item.country);
    }
  }, [openRegion]);

  const themeOptions = [
    { key: "day", label: "☀️ Day" },
    { key: "night", label: "🌙 Night" },
    { key: "system", label: "⚙️ System" }
  ];

  return (
    <div className="ge-app">
      <header className="ge-header">
        <div className="ge-logo">
          <div className="ge-logo-icon">🌍</div>
          <div>
            <div className="ge-logo-text">GlobeEtiquette</div>
            <div className="ge-logo-sub">Cultural Do's & Don'ts</div>
          </div>
        </div>
        <div className="ge-header-right">
          <div className="ge-theme-toggle">
            {themeOptions.map(opt => (
              <button
                key={opt.key}
                className={`ge-theme-btn${theme === opt.key ? " active" : ""}`}
                onClick={() => setTheme(opt.key)}
              >
                {opt.label}
              </button>
            ))}
          </div>
          <SearchBox onSelect={handleSearchSelect} />
        </div>
      </header>

      <MapPane
        theme={theme}
        onCountryClick={openCountry}
        mapRef={mapRef}
        geoLayerRef={geoLayerRef}
      />

      <div className={`ge-hint${zoomed ? " hidden" : ""}`}>
        Click any country to explore its cultural guide
      </div>

      {zoomed && (
        <button className="ge-globe-btn" onClick={resetView}>
          ← Back to World View
        </button>
      )}

      <SidePanel
        panelState={panelState}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={closePanel}
        onRegionClick={openRegion}
        onRegionEnter={highlightCountry}
        onRegionLeave={unhighlightCountry}
      />
    </div>
  );
}
