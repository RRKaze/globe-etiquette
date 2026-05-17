import { useState, useEffect, useRef, useCallback } from "react";
import "./assets/globeEtiquette/styles.css";
import { DATA, COUNTRY_COORDS } from "./assets/globeEtiquette/data";
import { getEffectiveTileTheme } from "./assets/globeEtiquette/helpers";
import { t, detectLang } from "./assets/globeEtiquette/i18n";
import SearchBox from "./assets/globeEtiquette/SearchBox";
import MapPane from "./assets/globeEtiquette/MapPane";
import SidePanel from "./assets/globeEtiquette/SidePanel";
import LanguageSelector from "./assets/globeEtiquette/LanguageSelector";

export default function App() {
  const [theme, setTheme] = useState("night");
  const [lang, setLang] = useState(detectLang);
  const [panelState, setPanelState] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const country = params.get("country");
    const match = country ? Object.keys(DATA).find(k => k.toLowerCase() === country.toLowerCase()) : null;
    if (match) return { open: true, country: match, region: null, isRegionView: false };
    return { open: false, country: null, region: null, isRegionView: false };
  });
  const [activeTab, setActiveTab] = useState("guide");
  const [zoomed, setZoomed] = useState(() => !!new URLSearchParams(window.location.search).get("country"));
  const mapRef = useRef(null);
  const geoLayerRef = useRef(null);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (panelState.country) url.searchParams.set("country", panelState.country);
    else url.searchParams.delete("country");
    window.history.replaceState(null, "", url);
  }, [panelState.country]);

  // Open sidebar for a country — zoom only when bounds provided (click), not on hover
  const openCountry = useCallback((name, bounds) => {
    const match = Object.keys(DATA).find(
      k => k.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(k.toLowerCase())
    );
    if (bounds) mapRef.current?.fitBounds(bounds, { padding: [40, 40] });
    setZoomed(true);
    setPanelState({ open: true, country: match ?? name, region: null, isRegionView: false });
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

  const handleSearchSelect = useCallback(item => {
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
    { key: "day",    label: "☀️ Day"    },
    { key: "night",  label: "🌙 Night"  },
    { key: "system", label: "⚙️ System" },
  ];

  return (
    <div className="ge-app">
      <header className="ge-header">
        <div className="ge-logo">
          <div className="ge-logo-icon">🌍</div>
          <div>
            <div className="ge-logo-text">GlobeEtiquette</div>
            <div className="ge-logo-sub">{t(lang, "subtitle")}</div>
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
          <SearchBox lang={lang} onSelect={handleSearchSelect} />
          <LanguageSelector lang={lang} onChange={setLang} />
        </div>
      </header>

      <MapPane
        lang={lang}
        theme={theme}
        onCountryOpen={openCountry}
        mapRef={mapRef}
        geoLayerRef={geoLayerRef}
      />

      <div className={`ge-hint${zoomed ? " hidden" : ""}`}>
        {t(lang, "hint")}
      </div>

      {zoomed && (
        <button className="ge-globe-btn" onClick={resetView}>
          {t(lang, "backToWorld")}
        </button>
      )}

      <SidePanel
        panelState={panelState}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        onClose={closePanel}
        onRegionClick={openRegion}
        lang={lang}
      />
    </div>
  );
}
