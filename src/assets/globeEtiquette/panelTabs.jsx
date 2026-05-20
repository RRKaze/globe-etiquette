import { useState } from "react";
import { DATA, REGION_HIGHLIGHTS } from "./data";
import { t } from "./i18n";

const CATS = [
  { key: "all",       label: "All" },
  { key: "greeting",  label: "Greeting" },
  { key: "food",      label: "Food" },
  { key: "dress",     label: "Dress" },
  { key: "transport", label: "Transport" },
  { key: "general",   label: "General" },
];

export function GuideTab({ country, lang }) {
  const d = DATA[country];
  const [activeCat, setActiveCat] = useState("all");

  if (!d) return (
    <div className="ge-welcome">
      <div className="ge-welcome-icon">🔍</div>
      <div className="ge-welcome-text">{t(lang, "noGuide")}</div>
    </div>
  );

  const filteredDos   = activeCat === "all" ? d.do   : d.do.filter(item => item.cat === activeCat);
  const filteredDonts = activeCat === "all" ? d.dont : d.dont.filter(item => item.cat === activeCat);

  return (
    <>
      <div className="ge-filter-chips">
        {CATS.map(c => (
          <button
            key={c.key}
            className={"ge-filter-chip" + (activeCat === c.key ? " active" : "")}
            onClick={() => setActiveCat(c.key)}
          >
            {c.label}
          </button>
        ))}
      </div>
      <div style={{ marginBottom: 24 }}>
        <div className="ge-section-label">✅ {t(lang, "dos")}</div>
        {filteredDos.length === 0
          ? <div className="ge-filter-empty">No items in this category.</div>
          : filteredDos.map((item, i) => (
            <div key={i} className="ge-item do">
              <div className="ge-item-icon">✓</div>
              <div className="ge-item-text">{item.text}</div>
            </div>
          ))
        }
      </div>
      <div className="ge-divider" />
      <div>
        <div className="ge-section-label">🚫 {t(lang, "donts")}</div>
        {filteredDonts.length === 0
          ? <div className="ge-filter-empty">No items in this category.</div>
          : filteredDonts.map((item, i) => (
            <div key={i} className="ge-item dont">
              <div className="ge-item-icon">✕</div>
              <div className="ge-item-text">{item.text}</div>
            </div>
          ))
        }
      </div>
    </>
  );
}

export function RegionsTab({ country, lang, onRegionClick }) {
  const regions = DATA[country]?.regions ?? [];
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 14 }}>{t(lang, "regionsLabel")}</div>
      {regions.length === 0 ? (
        <p style={{ color: "var(--text2)", fontSize: 14 }}>{t(lang, "noRegions")}</p>
      ) : (
        <div className="ge-region-grid">
          {regions.map(r => (
            <button key={r} className="ge-region-pill" onClick={() => onRegionClick(r, country)}>
              📍 {r}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

export function RegionGuideTab({ region, country, lang }) {
  const highlights = REGION_HIGHLIGHTS[country]?.[region];
  const dos = highlights?.do ?? [
    `Follow all national do's that apply in ${country}`,
    `Check local laws — ${region} may have specific regional regulations`,
    `Embrace local food, festivals, and dialect; regional pride runs strong`,
  ];
  const donts = highlights?.dont ?? [
    `Don't assume regional identity matches the national stereotype`,
    `Don't ignore regional environmental or heritage site restrictions`,
  ];
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 10 }}>
        {t(lang, "highlights", { region })}
      </div>
      <div style={{ marginBottom: 16 }}>
        <div className="ge-section-label">✅ {t(lang, "dos")}</div>
        {dos.map((item, i) => (
          <div key={i} className="ge-item do">
            <div className="ge-item-icon">✓</div>
            <div className="ge-item-text">{typeof item === "string" ? item : item.text}</div>
          </div>
        ))}
      </div>
      <div className="ge-divider" />
      <div>
        <div className="ge-section-label">🚫 {t(lang, "donts")}</div>
        {donts.map((item, i) => (
          <div key={i} className="ge-item dont">
            <div className="ge-item-icon">✕</div>
            <div className="ge-item-text">{typeof item === "string" ? item : item.text}</div>
          </div>
        ))}
      </div>
      {!highlights && (
        <div style={{ marginTop: 16, padding: 12, background: "var(--surface2)", borderRadius: 10, fontSize: 13, color: "var(--text2)" }}>
          💡 {t(lang, "regionNote", { country })}
        </div>
      )}
    </>
  );
}

export function PhrasesTab({ country, lang }) {
  const d = DATA[country];
  if (!d?.phrases) return <p style={{color:"var(--text2)",fontSize:14,paddingTop:8}}>{t(lang,"noGuide")}</p>;
  return (
    <>
      <div className="ge-section-label" style={{marginBottom:14}}>{t(lang,"tabPhrases")}</div>
      <div className="ge-phrases-list">
        {d.phrases.map((p,i) => (
          <div key={i} className="ge-phrase-row">
            <div className="ge-phrase-label">{p.label}</div>
            <div className="ge-phrase-native">{p.native}</div>
            {p.romanized && <div className="ge-phrase-romanized">{p.romanized}</div>}
          </div>
        ))}
      </div>
    </>
  );
}

export function InfoTab({ country, lang }) {
  const d = DATA[country];
  if (!d) return <p style={{ color: "var(--text2)", fontSize: 14, paddingTop: 8 }}>{t(lang, "noInfo")}</p>;
  const rows = [
    [t(lang, "capital"),    d.capital],
    [t(lang, "language"),   d.language],
    [t(lang, "currency"),   d.currency],
    [t(lang, "population"), d.population],
  ];
  return (
    <>
      <div className="ge-section-label" style={{ marginBottom: 8 }}>{t(lang, "infoLabel")}</div>
      {rows.map(([label, val]) => (
        <div key={label} className="ge-info-row">
          <span className="ge-info-label">{label}</span>
          <span className="ge-info-val">{val || "—"}</span>
        </div>
      ))}
    </>
  );
}
