import React from "react";


import type { ricezione } from "../../../Interfacce/Parametri";



const rosso: any = {
    backgroundColor: "red",
    width: "80%"
}

export const Figlio = (parametro: ricezione) => {

    //let cittaFiglio: string = "Firenze";
    return <div style={rosso}>
        <h2>Componente figlio che riceve dal padre</h2>
        <h3>{parametro.anni} - {parametro.cittaRicevuta} - {parametro.cognome}</h3>
    </div>
}

