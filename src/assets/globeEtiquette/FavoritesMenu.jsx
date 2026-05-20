import { useState, useRef, useEffect } from "react";
import { DATA } from "./data";

export default function FavoritesMenu({ favorites, recentlyViewed, onSelect, onToggleFavorite }) {
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
              <div key={country} className="ge-favs-item">
                <button
                  className="ge-favs-item-main"
                  onClick={() => { onSelect({ type: "country", name: country }); setOpen(false); }}
                >
                  <span className="ge-favs-flag">{DATA[country]?.flag ?? "🌍"}</span>
                  <span>{country}</span>
                </button>
                <button
                  className="ge-favs-remove"
                  onClick={e => { e.stopPropagation(); onToggleFavorite(country); }}
                  aria-label={`Remove ${country} from favorites`}
                >✕</button>
              </div>
            ))
          )}
          {recentlyViewed.filter(c => !favorites.includes(c)).length > 0 && (
            <>
              <div className="ge-favs-section-label">Recently Viewed</div>
              {recentlyViewed.filter(c => !favorites.includes(c)).map(country => (
                <div key={country} className="ge-favs-item ge-favs-item-recent">
                  <button
                    className="ge-favs-item-main"
                    onClick={() => { onSelect({ type: "country", name: country }); setOpen(false); }}
                  >
                    <span className="ge-favs-flag">{DATA[country]?.flag ?? "🌍"}</span>
                    <span>{country}</span>
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      )}
    </div>
  );
}
