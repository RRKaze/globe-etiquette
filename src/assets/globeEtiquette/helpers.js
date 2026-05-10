import { DATA } from "./data";

export function getEffectiveTileTheme(theme) {
  if (theme === "system") return window.matchMedia("(prefers-color-scheme:light)").matches ? "day" : "night";
  return theme === "day" ? "day" : "night";
}

export function buildSuggestions(query) {
  const q = query.trim().toLowerCase();
  if (q.length < 2) return [];
  const countries = Object.keys(DATA).filter(c => c.toLowerCase().includes(q)).map(c => ({ type: "country", name: c }));
  const regions = Object.entries(DATA).flatMap(([country, d]) =>
    (d.regions || []).filter(r => r.toLowerCase().includes(q)).map(r => ({ type: "region", name: r, country }))
  );
  return [...countries, ...regions].slice(0, 8);
}
