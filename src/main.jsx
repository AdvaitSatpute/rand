import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import EnvironmentalSustainabilityPlatform from "./EnvironmentalSustainabilityPlatform.jsx";
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <EnvironmentalSustainabilityPlatform />
  </StrictMode>,
)
