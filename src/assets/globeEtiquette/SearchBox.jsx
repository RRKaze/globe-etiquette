import { useState, useEffect, useRef } from "react";
import { DATA } from "./data";
import { buildSuggestions } from "./helpers";
import { t } from "./i18n";

export default function SearchBox({ lang, onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const wrapRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    const handler = e => {
      if (e.key === "/" && document.activeElement !== inputRef.current) {
        e.preventDefault();
        inputRef.current?.focus();
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    const results = buildSuggestions(query);
    setSuggestions(results);
    setOpen(results.length > 0);
    setActiveIndex(-1);
  }, [query]);

  useEffect(() => {
    const handler = e => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = item => {
    setQuery(item.type === "region" ? `${item.name}, ${item.country}` : item.name);
    setOpen(false);
    setActiveIndex(-1);
    onSelect(item);
  };

  const handleKeyDown = e => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActiveIndex(i => Math.min(i + 1, suggestions.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActiveIndex(i => Math.max(i - 1, -1));
    } else if (e.key === "Escape") {
      setOpen(false);
      setActiveIndex(-1);
    } else if (e.key === "Enter") {
      if (activeIndex >= 0 && suggestions[activeIndex]) {
        handleSelect(suggestions[activeIndex]);
      } else if (query.trim()) {
        const key = Object.keys(DATA).find(k =>
          k.toLowerCase() === query.trim().toLowerCase() ||
          k.toLowerCase().includes(query.trim().toLowerCase())
        );
        if (key) handleSelect({ type: "country", name: key });
      }
    }
  };

  return (
    <div className="ge-search" ref={wrapRef}>
      <span className="ge-search-icon">🔍</span>
      <input
        ref={inputRef}
        type="text"
        placeholder={t(lang, "search")}
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {query && (
        <button className="ge-search-clear" onClick={() => { setQuery(""); setOpen(false); }} aria-label="Clear">✕</button>
      )}
      {open && (
        <div className="ge-suggestions">
          {suggestions.map((item, i) => (
            <div
              key={i}
              className={`ge-sug-item${activeIndex === i ? " active" : ""}`}
              onMouseDown={() => handleSelect(item)}
              onMouseEnter={() => setActiveIndex(i)}
            >
              <span className="ge-sug-flag">
                {item.type === "country" ? (DATA[item.name]?.flag ?? "🌐") : (DATA[item.country]?.flag ?? "📍")}
              </span>
              <strong>{item.name}</strong>
              <small>{item.type === "region" ? item.country : "Country"}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
