import { useState, useEffect, useRef, useCallback } from "react";
import "./assets/globeEtiquette/styles.css";
import { DATA, COUNTRY_COORDS } from "./assets/globeEtiquette/data";
import { getEffectiveTileTheme } from "./assets/globeEtiquette/helpers";
import { t, detectLang } from "./assets/globeEtiquette/i18n";
import SearchBox from "./assets/globeEtiquette/SearchBox";
import MapPane from "./assets/globeEtiquette/MapPane";
import SidePanel from "./assets/globeEtiquette/SidePanel";
import LanguageSelector from "./assets/globeEtiquette/LanguageSelector";
import FavoritesMenu from "./assets/globeEtiquette/FavoritesMenu";
import { useUserPrefs } from "./assets/globeEtiquette/hooks/useUserPrefs";

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
  const [zoomed, setZoomed] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    const country = params.get("country");
    return !!country && Object.keys(DATA).some(k => k.toLowerCase() === country.toLowerCase());
  });
  const mapRef = useRef(null);
  const geoLayerRef = useRef(null);
  const { isFavorite, toggleFavorite, favorites } = useUserPrefs();

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (panelState.country) url.searchParams.set("country", panelState.country);
    else url.searchParams.delete("country");
    window.history.replaceState(null, "", url);
  }, [panelState.country]);

  // Open sidebar for a country — zoom to bounds on click
  const openCountry = useCallback((name, bounds) => {
    const match = Object.keys(DATA).find(
      k => k.toLowerCase() === name.toLowerCase() || name.toLowerCase().includes(k.toLowerCase())
    );
    if (bounds && mapRef.current) {
      const map = mapRef.current;
      const rawZoom = map.getBoundsZoom(bounds);
      if (rawZoom < 3) {
        // Very large country — fitBounds zooms to world view due to wide bounds (antimeridian).
        // Use COUNTRY_COORDS if known, otherwise fall back to bounds center at zoom 3.
        const coords = COUNTRY_COORDS[match ?? name];
        if (coords) {
          map.setView([coords[0], coords[1]], coords[2], { animate: true });
        } else {
          map.setView(bounds.getCenter(), 3, { animate: true });
        }
      } else {
        map.fitBounds(bounds, { paddingTopLeft: [60, 60], paddingBottomRight: [480, 60] });
      }
    }
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

  useEffect(() => {
    const handler = e => {
      if (e.key === "Escape" && panelState.open) closePanel();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [panelState.open, closePanel]);

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

  const surpriseMe = useCallback(() => {
    const countries = Object.keys(DATA);
    const pick = countries[Math.floor(Math.random() * countries.length)];
    handleSearchSelect({ type: "country", name: pick });
  }, [handleSearchSelect]);

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
          <button className="ge-surprise-btn" onClick={surpriseMe} title="Surprise me!">🎲</button>
          <FavoritesMenu favorites={favorites} onSelect={handleSearchSelect} onToggleFavorite={toggleFavorite} />
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
        initialCountry={panelState.country}
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
        isFavorite={isFavorite}
        onToggleFavorite={toggleFavorite}
      />
    </div>
  );
}
