import { useState } from "react";
import { DATA } from "./data";
import { t } from "./i18n";

export default function CompareModal({ countryA, onClose, lang }) {
  const [countryB, setCountryB] = useState(null);
  const dA = DATA[countryA];
  const dB = countryB ? DATA[countryB] : null;
  const countries = Object.keys(DATA).filter(c => c !== countryA).sort();

  return (
    <div className="ge-compare-overlay" onClick={onClose}>
      <div className="ge-compare-modal" onClick={e => e.stopPropagation()}>
        <div className="ge-compare-header">
          <span className="ge-compare-title">Compare Countries</span>
          <button className="ge-close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="ge-compare-body">
          {/* Left column — countryA */}
          <div className="ge-compare-col">
            <div className="ge-compare-col-header">
              <span className="ge-compare-flag">{dA?.flag}</span>
              <span className="ge-compare-name">{countryA}</span>
            </div>
            <CompareGuide d={dA} lang={lang} />
          </div>
          {/* Divider */}
          <div className="ge-compare-divider" />
          {/* Right column — countryB picker + guide */}
          <div className="ge-compare-col">
            <div className="ge-compare-col-header">
              {dB ? (
                <>
                  <span className="ge-compare-flag">{dB.flag}</span>
                  <span className="ge-compare-name">{countryB}</span>
                </>
              ) : (
                <span className="ge-compare-name" style={{color:"var(--text2)"}}>Pick a country</span>
              )}
            </div>
            <select
              className="ge-compare-select"
              value={countryB ?? ""}
              onChange={e => setCountryB(e.target.value || null)}
            >
              <option value="">— select country —</option>
              {countries.map(c => <option key={c} value={c}>{DATA[c]?.flag} {c}</option>)}
            </select>
            {dB && <CompareGuide d={dB} lang={lang} />}
            {!dB && (
              <div className="ge-compare-empty">Select a country above to compare its cultural guide side by side.</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function CompareGuide({ d, lang }) {
  if (!d) return null;
  return (
    <div className="ge-compare-guide">
      <div className="ge-section-label">✅ {t(lang, "dos")}</div>
      {d.do.map((item, i) => (
        <div key={i} className="ge-item do">
          <div className="ge-item-icon">✓</div>
          <div className="ge-item-text">{typeof item === "string" ? item : item.text}</div>
        </div>
      ))}
      <div className="ge-divider" />
      <div className="ge-section-label">🚫 {t(lang, "donts")}</div>
      {d.dont.map((item, i) => (
        <div key={i} className="ge-item dont">
          <div className="ge-item-icon">✕</div>
          <div className="ge-item-text">{typeof item === "string" ? item : item.text}</div>
        </div>
      ))}
    </div>
  );
}
