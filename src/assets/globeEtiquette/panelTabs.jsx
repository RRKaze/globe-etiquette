import { DATA } from "./data";

export function GuideTab({ country }) {
  const d = DATA[country];
  if (!d) return <div className="ge-welcome"><div className="ge-welcome-icon">🔍</div><div className="ge-welcome-text">No guide available for this location yet.</div></div>;
  return (
    <>
      <div style={{ marginBottom: 24 }}>
        <div className="ge-section-label">✅ Do's</div>
        {d.do.map((t, i) => (
          <div key={i} className="ge-item do">
            <div className="ge-item-icon">✓</div>
            <div className="ge-item-text">{t}</div>
          </div>
        ))}
      </div>
      <div className="ge-divider" />
      <div>
        <div className="ge-section-label">🚫 Don'ts</div>
        {d.dont.map((t, i) => (
          <div key={i} className="ge-item dont">
            <div className="ge-item-icon">✕</div>
            <div className="ge-item-text">{t}</div>
          </div>
        ))}
      </div>
    </>
  );
}

export function RegionsTab({ country, onRegionClick, onRegionEnter, onRegionLeave }) {
  const d = DATA[country];
  const regions = d?.regions || [];
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 14 }}>States / Provinces / Regions</div>
      {regions.length === 0 ? (
        <p style={{ color: "var(--text2)", fontSize: 14 }}>No regions available for this country yet.</p>
      ) : (
        <div className="ge-region-grid">
          {regions.map(r => (
            <button
              key={r}
              className="ge-region-pill"
              onClick={() => onRegionClick(r, country)}
              onMouseEnter={() => onRegionEnter(country)}
              onMouseLeave={() => onRegionLeave(country)}
            >
              📍 {r}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export function RegionGuideTab({ region, country }) {
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 10 }}>Regional Highlights — {region}</div>
      {[
        `Follow all national do's that apply in ${country}`,
        `Check local laws — ${region} may have specific regional regulations`,
        `Embrace local food, festivals, and dialect; regional pride runs strong`
      ].map((t, i) => (
        <div key={i} className="ge-item do"><div className="ge-item-icon">✓</div><div className="ge-item-text">{t}</div></div>
      ))}
      <div className="ge-divider" />
      {[
        `Don't assume regional identity matches the national stereotype`,
        `Don't ignore regional environmental or heritage site restrictions`
      ].map((t, i) => (
        <div key={i} className="ge-item dont"><div className="ge-item-icon">✕</div><div className="ge-item-text">{t}</div></div>
      ))}
      <div style={{ marginTop: 16, padding: 12, background: "var(--surface2)", borderRadius: 10, fontSize: 13, color: "var(--text2)" }}>
        💡 Full regional guides with local nuances are being expanded. National rules for {country} still apply here.
      </div>
    </>
  );
}

export function InfoTab({ country }) {
  const d = DATA[country];
  if (!d) return <p style={{ color: "var(--text2)", fontSize: 14, paddingTop: 8 }}>Info not available.</p>;
  const rows = [
    ["Capital", d.capital], ["Official Language", d.language],
    ["Currency", d.currency], ["Population", d.population]
  ];
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 8 }}>Country Overview</div>
      {rows.map(([label, val]) => (
        <div key={label} className="ge-info-row">
          <span className="ge-info-label">{label}</span>
          <span className="ge-info-val">{val || "—"}</span>
        </div>
      ))}
    </>
  );
}
