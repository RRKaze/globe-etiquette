import { useState, useRef, useEffect } from "react";
import { DATA } from "./data";

export default function FavoritesMenu({ favorites, onSelect }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const close = e => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="ge-favs" ref={ref}>
      <button
        className={`ge-favs-trigger${open ? " open" : ""}`}
        onClick={() => setOpen(o => !o)}
        aria-label="Favorites"
      >
        ★
        {favorites.length > 0 && <span className="ge-favs-badge">{favorites.length}</span>}
      </button>
      {open && (
        <div className="ge-favs-dropdown">
          {favorites.length === 0 ? (
            <div className="ge-favs-empty">
              No favorites yet.<br />Click ★ on any country to save it.
            </div>
          ) : (
            favorites.map(country => (
              <button
                key={country}
                className="ge-favs-item"
                onClick={() => { onSelect({ type: "country", name: country }); setOpen(false); }}
              >
                <span className="ge-favs-flag">{DATA[country]?.flag ?? "🌍"}</span>
                <span>{country}</span>
              </button>
            ))
          )}
        </div>
      )}
    </div>
  );
}
