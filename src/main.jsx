import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import GlobeEtiquette from './GlobeEtiquette.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <GlobeEtiquette />
  </StrictMode>,
)
