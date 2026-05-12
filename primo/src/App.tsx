
import './App.css'

import { Anonima } from './Componenti/Anonima'

import { Arrow } from './Componenti/Arrow'

import { Condizione } from './Componenti/Condizione'

function App() {

  return (
    <div>
      <label htmlFor="">Ciao</label>
      <Mia></Mia>
      <Anonima></Anonima>
      <Arrow></Arrow>
      <Condizione></Condizione>
    </div>
  )

}


export function Mia() {
  return (
    <ul>
      <li><label htmlFor="">Saluti</label></li>
      <li><label htmlFor="">Saluti</label></li>
      <li><label htmlFor="">Saluti</label></li>
    </ul>
  )
}

export default App
