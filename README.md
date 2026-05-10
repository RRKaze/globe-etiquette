# Globe Etiquette

Globe Etiquette is a React + Vite app for exploring country-specific cultural do's and don'ts on an interactive world map.

## Prerequisites

- Node.js 18+ (recommended: latest LTS)
- npm 9+

## Setup

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open the local URL shown in the terminal (usually `http://localhost:5173`).

## Available Scripts

- `npm run dev` - start local development server with HMR
- `npm run build` - build production assets into `dist/`
- `npm run preview` - preview the production build locally
- `npm run lint` - run ESLint

## Project Structure

- `src/main.jsx` - app entry point
- `src/GlobeEtiquette.jsx` - top-level app orchestration
- `src/assets/globeEtiquette/` - app modules (`data`, `helpers`, `MapPane`, `SearchBox`, `SidePanel`, styles)

## Notes

- The app uses Leaflet and Carto basemaps for map rendering.
- Cultural data currently includes a curated set of countries and can be expanded in `src/assets/globeEtiquette/data.js`.
