import { useState, useCallback } from "react";
import { DATA } from "./data";
import { t } from "./i18n";
import { GuideTab, RegionsTab, RegionGuideTab, InfoTab, PhrasesTab } from "./panelTabs";
import CompareModal from "./CompareModal";

export default function SidePanel({
  panelState,
  activeTab,
  setActiveTab,
  onClose,
  onRegionClick,
  lang,
  isFavorite,
  onToggleFavorite,
}) {
  const { open, country, region, isRegionView } = panelState;
  const d = country ? DATA[country] : null;
  const [copied, setCopied] = useState(false);
  const [compareOpen, setCompareOpen] = useState(false);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  const tabs = [
    { key: "guide",   label: t(lang, "tabGuide")   },
    { key: "regions", label: t(lang, "tabRegions")  },
    { key: "info",    label: t(lang, "tabInfo")     },
    { key: "phrases", label: t(lang, "tabPhrases")  },
  ];

  return (
    <>
    <div className={`ge-panel${open ? " open" : ""}`}>

      {/* ── Header ── */}
      <div className="ge-panel-header">
        <div className="ge-panel-header-top">
          <div className="ge-panel-identity">
            <div className="ge-panel-flag-block">
              {d?.flag ?? "🌍"}
            </div>
            <div className="ge-panel-title-group">
              <div className="ge-panel-country">
                {isRegionView ? region : (country ?? "")}
              </div>
              <div className="ge-panel-region">
                {isRegionView
                  ? `${country} · ${d?.capital ?? ""}`
                  : d?.capital ? `${t(lang, "capital")}: ${d.capital}` : ""}
              </div>
            </div>
          </div>
          <div className="ge-panel-header-actions">
            {country && (
              <button
                className={`ge-fav-btn${isFavorite(country) ? " active" : ""}`}
                onClick={() => onToggleFavorite(country)}
                aria-label={isFavorite(country) ? "Remove from favorites" : "Add to favorites"}
              >
                {isFavorite(country) ? "★" : "☆"}
              </button>
            )}
            {country && (
              <button className="ge-copy-btn" onClick={() => setCompareOpen(true)}>⚖ Compare</button>
            )}
            {country && (
              <button className="ge-copy-btn" onClick={handleCopyLink}>
                {copied ? t(lang, "copied") : t(lang, "copyLink")}
              </button>
            )}
            <button className="ge-close-btn" onClick={onClose} aria-label="Close">✕</button>
          </div>
        </div>
      </div>

      {/* ── Tabs ── */}
      <div className="ge-tabs">
        {tabs.map(tab => (
          <button
            key={tab.key}
            className={`ge-tab${activeTab === tab.key ? " active" : ""}`}
            onClick={() => setActiveTab(tab.key)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* ── Body ── */}
      <div className="ge-panel-body">
        {activeTab === "guide" && (
          isRegionView
            ? <RegionGuideTab region={region} country={country} lang={lang} />
            : <GuideTab country={country} lang={lang} />
        )}
        {activeTab === "regions" && !isRegionView && (
          <RegionsTab country={country} lang={lang} onRegionClick={onRegionClick} />
        )}
        {activeTab === "regions" && isRegionView && (
          <p style={{ color: "var(--text2)", fontSize: 14, paddingTop: 8 }}>
            {t(lang, "regionBack", { region })}
          </p>
        )}
        {activeTab === "info" && <InfoTab country={country} lang={lang} />}
        {activeTab === "phrases" && <PhrasesTab country={country} lang={lang} />}
      </div>

    </div>
    {compareOpen && country && (
      <CompareModal countryA={country} onClose={() => setCompareOpen(false)} lang={lang} />
    )}
    </>
  );
}
