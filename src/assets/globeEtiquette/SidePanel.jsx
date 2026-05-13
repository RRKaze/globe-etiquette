import { useState, useCallback } from "react";
import { DATA } from "./data";
import { GuideTab, RegionsTab, RegionGuideTab, InfoTab } from "./panelTabs";

export default function SidePanel({
  panelState,
  activeTab,
  setActiveTab,
  onClose,
  onRegionClick,
  onRegionEnter,
  onRegionLeave
}) {
  const { open, country, region, isRegionView } = panelState;
  const d = country ? DATA[country] : null;
  const tabs = ["guide", "regions", "info"];
  const tabLabels = ["Cultural Guide", "States / Regions", "Quick Info"];
  const [copied, setCopied] = useState(false);

  const handleCopyLink = useCallback(() => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, []);

  return (
    <div className={`ge-panel${open ? " open" : ""}`}>
      <div className="ge-panel-header">
        <div className="ge-panel-header-row">
          <button className="ge-back-btn" onClick={onClose}>← Back</button>
          {country && (
            <button className="ge-copy-btn" onClick={handleCopyLink}>
              {copied ? "✓ Copied!" : "🔗 Copy Link"}
            </button>
          )}
        </div>
        <div>
          <span className="ge-panel-flag">{d?.flag || "🗺️"}</span>
          <span className="ge-panel-country">{isRegionView ? region : (country || "")}</span>
        </div>
        <div className="ge-panel-region">
          {isRegionView ? `${country} · ${d?.capital || ""}` : (d?.capital ? `Capital: ${d.capital}` : "")}
        </div>
      </div>

      <div className="ge-tabs">
        {tabs.map((t, i) => (
          <button key={t} className={`ge-tab${activeTab === t ? " active" : ""}`} onClick={() => setActiveTab(t)}>
            {tabLabels[i]}
          </button>
        ))}
      </div>

      <div className="ge-panel-body">
        {activeTab === "guide" && (
          isRegionView
            ? <RegionGuideTab region={region} country={country} />
            : <GuideTab country={country} />
        )}
        {activeTab === "regions" && !isRegionView && (
          <RegionsTab
            country={country}
            onRegionClick={onRegionClick}
            onRegionEnter={onRegionEnter}
            onRegionLeave={onRegionLeave}
          />
        )}
        {activeTab === "regions" && isRegionView && (
          <p style={{ color: "var(--text2)", fontSize: 14, paddingTop: 8 }}>
            Viewing regional guide for {region}. Go back to see all regions.
          </p>
        )}
        {activeTab === "info" && <InfoTab country={country} />}
      </div>
    </div>
  );
}
