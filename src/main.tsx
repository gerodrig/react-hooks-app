import {
  StrictMode,
  // Suspense
} from 'react';

import { createRoot } from 'react-dom/client';
// import { TrafficLight } from './01-useState/TrafficLight.tsx'
// import { TrafficLightWithEffect } from './02-useEffect/TrafficLightWithEffect.tsx'
// import { TrafficLightWithHook } from './02-useEffect/TrafficLightWithHook.tsx'
// import { PokemonPage } from '../03-examples/PokemonPage';
// import { FocusScreen } from '../04-useRef/FocusScreen';
// import { TasksApp } from '../05-useReducer/TaskApp';
// import { ScrambleWords } from './05-useReducer/ScrambleWords';
// import { MemoHook } from './06-memos/MemoHook';
// import { MemoCounter } from './06-memos/MemoCounter'
// import { InstagramCloneApp } from './07-useOptimistic/InstagramCloneApp'
// import { ClientInformation } from './08-use-suspense/ClientInformation';
// import { Loader } from './08-use-suspense/Loader';
// import { getUserAction } from './08-use-suspense/api/get-user.action';

import './index.css';
import { ProfessionalApp } from './09-useContext/ProfessionalApp';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
    {/* <TrafficLightWithHook /> */}
    {/* <PokemonPage /> */}
    {/* <FocusScreen /> */}
    {/* <TasksApp /> */}
    {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagramCloneApp /> */}
    {/* <Suspense fallback={<Loader />}>
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense> */}
    <ProfessionalApp />
  </StrictMode>
);
