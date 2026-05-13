import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { Master } from './Componenti/Master.tsx'

createRoot(document.getElementById('root')!).render(
  <Master></Master>,
)
