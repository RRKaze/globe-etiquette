# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # start dev server with HMR (check terminal for actual port)
npm run build    # production build → dist/
npm run preview  # preview production build
npm run lint     # ESLint
```

No test framework is configured.

## Architecture

Single-file React app with no router and no TypeScript. All modules live in `src/assets/globeEtiquette/`.

**State flow (`GlobeEtiquette.jsx`)** — the root component owns all state:
- `panelState` `{ open, country, region, isRegionView }` drives the side panel
- `theme` ("day" | "night" | "system") is set as `data-theme` on `<html>` and controls both CSS variables and map tile/border colors
- `lang` ("en" | "es" | "zh") flows as a prop to every component; text is looked up via `t(lang, key, vars)` from `i18n.js`
- URL deeplinks work via `?country=Japan`; state is initialized from URLSearchParams and kept in sync with `history.replaceState`

**Leaflet is loaded from CDN at runtime** (not an npm dep). `MapPane.jsx` injects a `<script>` tag on first mount and accesses the map via `window.L`. `mapRef` (the Leaflet map instance) and `geoLayerRef` (always an array of three `L.geoJSON` layers — main + ±360° copies for wraparound) are forwarded from the root via refs.

**GeoJSON** is fetched at runtime from `https://raw.githubusercontent.com/datasets/geo-countries/master/data/countries.geojson`. Country names in this GeoJSON (`feature.properties.ADMIN`) must match the keys in `DATA` in `data.js` for click-to-open to work.

**Data** (`data.js`) exports:
- `DATA` — keyed by country name; each entry has `flag`, `capital`, `language`, `currency`, `population`, `do[]`, `dont[]`, `regions[]`
- `REGION_HIGHLIGHTS` — optional per-region `do`/`dont` arrays; falls back to generic text if absent
- `TILES` — map tile URLs and style colors for "day" / "night" themes
- `COUNTRY_COORDS` — `[lat, lng, zoom]` overrides used when `fitBounds` produces a bad zoom (e.g. Russia, USA spanning antimeridian)

**Adding a country**: add an entry to `DATA` using the exact name that appears in the GeoJSON `ADMIN` field. Add a `COUNTRY_COORDS` entry if the country is very large or spans the antimeridian.

**Adding a language**: add a locale object to `UI` in `i18n.js` and add the language code + label to `LANGUAGES`.
