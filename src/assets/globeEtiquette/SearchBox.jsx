import { useState, useEffect, useRef } from "react";
import { DATA } from "./data";
import { buildSuggestions } from "./helpers";

export default function SearchBox({ onSelect }) {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [open, setOpen] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const results = buildSuggestions(query);
    setSuggestions(results);
    setOpen(results.length > 0);
  }, [query]);

  useEffect(() => {
    const handler = (e) => { if (wrapRef.current && !wrapRef.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const handleSelect = (item) => {
    setQuery(item.type === "region" ? `${item.name}, ${item.country}` : item.name);
    setOpen(false);
    onSelect(item);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && query.trim()) {
      const key = Object.keys(DATA).find(k => k.toLowerCase() === query.trim().toLowerCase() || k.toLowerCase().includes(query.trim().toLowerCase()));
      if (key) handleSelect({ type: "country", name: key });
    }
  };

  return (
    <div className="ge-search" ref={wrapRef}>
      <span className="ge-search-icon">🔍</span>
      <input
        type="text"
        placeholder="Search country or region…"
        value={query}
        onChange={e => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
        autoComplete="off"
      />
      {open && (
        <div className="ge-suggestions">
          {suggestions.map((item, i) => (
            <div key={i} className="ge-sug-item" onMouseDown={() => handleSelect(item)}>
              <strong>{item.name}</strong>
              <small>{item.type === "region" ? item.country : "Country"}</small>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
