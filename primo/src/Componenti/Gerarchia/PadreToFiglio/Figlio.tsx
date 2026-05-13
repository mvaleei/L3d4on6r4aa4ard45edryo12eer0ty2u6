import React, { useState } from "react";


import type { ricezione } from "../../../Interfacce/Parametri";



const rosso: any = {
    backgroundColor: "red",
    width: "80%"
}

export const Figlio = (parametro: ricezione) => {


    const [
        datoFiglio,
        setDatoFiglio
    ] = useState<ricezione>(parametro)



    //let cittaFiglio: string = "Firenze";
    return <div style={rosso}>
        <h2>Componente figlio che riceve dal padre</h2>
        <label htmlFor="">Digita la nuova città</label>
        <input
            type="text"
            onChange={
                (digitato: any) => {
                    let nuovoOggetto: ricezione = {
                        anni: datoFiglio.anni,
                        cognome: datoFiglio.cognome,
                        cittaRicevuta: digitato.target.value
                    }

                    setDatoFiglio(nuovoOggetto);

                }
            }

        />
        <h3>{datoFiglio.anni} - {datoFiglio.cittaRicevuta} - {datoFiglio.cognome}</h3>
    </div>
}

