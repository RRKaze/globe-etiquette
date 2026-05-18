import { useState, useCallback } from "react";

const STORAGE_KEY = "ge_user_prefs";

function load() {
  try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) ?? {}; }
  catch { return {}; }
}

function save(prefs) {
  try { localStorage.setItem(STORAGE_KEY, JSON.stringify(prefs)); } catch {}
}

/**
 * Manages per-user customisations stored in localStorage.
 *
 * Shape of prefs:
 * {
 *   hidden: { [country]: { dos: number[], donts: number[] } },   // 0-based item indices the user hid
 *   added:  { [country]: { dos: string[], donts: string[] } },   // user-authored items
 * }
 *
 * Usage (future sidebar customisation UI):
 *   const { isHidden, toggleHidden, addItem, removeAdded } = useUserPrefs();
 */
export function useUserPrefs() {
  const [prefs, setPrefs] = useState(load);

  const update = useCallback(updater => {
    setPrefs(prev => {
      const next = updater(prev);
      save(next);
      return next;
    });
  }, []);

  const isHidden = useCallback((country, tab, index) =>
    prefs.hidden?.[country]?.[tab]?.includes(index) ?? false,
  [prefs]);

  const toggleHidden = useCallback((country, tab, index) => {
    update(prev => {
      const hidden = prev.hidden ?? {};
      const key = hidden[country]?.[tab] ?? [];
      const next = key.includes(index) ? key.filter(i => i !== index) : [...key, index];
      return { ...prev, hidden: { ...hidden, [country]: { ...(hidden[country] ?? {}), [tab]: next } } };
    });
  }, [update]);

  const addItem = useCallback((country, tab, text) => {
    update(prev => {
      const added = prev.added ?? {};
      const existing = added[country]?.[tab] ?? [];
      return { ...prev, added: { ...added, [country]: { ...(added[country] ?? {}), [tab]: [...existing, text] } } };
    });
  }, [update]);

  const removeAdded = useCallback((country, tab, index) => {
    update(prev => {
      const added = prev.added ?? {};
      const existing = added[country]?.[tab] ?? [];
      return { ...prev, added: { ...added, [country]: { ...(added[country] ?? {}), [tab]: existing.filter((_, i) => i !== index) } } };
    });
  }, [update]);

  const getAdded = useCallback((country, tab) =>
    prefs.added?.[country]?.[tab] ?? [],
  [prefs]);

  const isFavorite = useCallback(country =>
    (prefs.favorites ?? []).includes(country),
  [prefs]);

  const toggleFavorite = useCallback(country => {
    update(prev => {
      const favs = prev.favorites ?? [];
      const next = favs.includes(country) ? favs.filter(c => c !== country) : [...favs, country];
      return { ...prev, favorites: next };
    });
  }, [update]);

  const favorites = prefs.favorites ?? [];

  return { isHidden, toggleHidden, addItem, removeAdded, getAdded, isFavorite, toggleFavorite, favorites };
}
