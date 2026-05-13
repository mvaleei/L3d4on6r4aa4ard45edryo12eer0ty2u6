
import { createRoot } from 'react-dom/client'
import './index.css'
import App, { Mia } from './App.tsx'

import { Comp1, Comp2, Comp3 } from './Componenti/Multi.tsx'

import { Inserisci } from './Componenti/Inserisci.tsx'


import { Struttura } from './Componenti/Struttura.tsx'

import { Padre } from './Componenti/Gerarchia/PadreToFiglio/Padre.tsx'


import { Listato } from './Componenti/Gerarchia/Listato.tsx'

import { PadreRicevi } from './Componenti/Gerarchia/FiglioToPadre/PadreRicevi.tsx'


createRoot(document.getElementById('root')!).render(
  <div>
    <PadreRicevi></PadreRicevi>
    <Listato></Listato>
    <Padre></Padre>
    <Struttura></Struttura>
    <App />
    <Mia></Mia>
    <Comp1></Comp1>
    <Comp2></Comp2>
    <Comp3></Comp3>
    <Inserisci></Inserisci>
  </div>

  ,
)

