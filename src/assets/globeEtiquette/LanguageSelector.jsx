import { useState, useRef, useEffect } from "react";
import { LANGUAGES } from "./i18n";

export default function LanguageSelector({ lang, onChange }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const current = LANGUAGES.find(l => l.code === lang) ?? LANGUAGES[0];

  useEffect(() => {
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="ge-lang" ref={ref}>
      <button className="ge-lang-btn" onClick={() => setOpen(o => !o)} aria-label="Select language">
        <span>{current.flag}</span>
        <span className="ge-lang-label">{current.label}</span>
        <span className="ge-lang-caret">{open ? "▲" : "▼"}</span>
      </button>
      {open && (
        <div className="ge-lang-dropdown">
          {LANGUAGES.map(l => (
            <button
              key={l.code}
              className={`ge-lang-option${l.code === lang ? " active" : ""}`}
              onClick={() => { onChange(l.code); setOpen(false); }}
            >
              <span>{l.flag}</span>
              <span>{l.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
