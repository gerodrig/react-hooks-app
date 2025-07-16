import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import { TrafficLight } from './01-useState/TrafficLight.tsx'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'
// import { PokemonPage } from '../03-examples/PokemonPage';
import { FocusScreen } from '../04-useRef/FocusScreen';

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    <FocusScreen />
  </StrictMode>,
)
