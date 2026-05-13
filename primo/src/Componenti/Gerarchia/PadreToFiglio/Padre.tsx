import React, { useState } from "react";

import { Figlio } from "./Figlio";

import type { ricezione } from "../../../Interfacce/Parametri";

const grigio: any = {
    backgroundColor: "grey",
    width: "80%"
}

let dato: ricezione = {
    anni: 44,
    cittaRicevuta: "Salerno",
    cognome: "Rossi"
}



export const Padre = () => {


    const [
        citta,
        setCitta
    ] = useState<string>("")


    return <div style={grigio}>
        <h2>Componente padre che invia alfiglio</h2>
        <label htmlFor="">Digita la città di nascita</label>
        <input
            type="text"
            onChange={
                (digitato: any) => {
                    setCitta(digitato.target.value);
                }
            }
        /> <span>{citta}</span>
        <Figlio {...dato}></Figlio>
        <br />
    </div>
}