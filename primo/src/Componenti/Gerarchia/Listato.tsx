import React, { useState } from "react";

import type { Persona } from "../../Interfacce/Persona";

import { Dettaglio } from "../Dettaglio";

const grey: any = {
    backgroundColor: 'grey',
    width: '80%'
}

export const Listato = () => {



    const inserito: Persona = {
        id: 0,
        nome: "",
        cognome: "",
        anni: 0
    }


    const [
        nuovaPersona,
        setNuovaPersona
    ] = useState<Persona>(inserito)


    const anagrafica: Array<Persona> = [
        {
            id: 1,
            nome: "Dario",
            cognome: "Darietti",
            anni: 26
        },
        {
            id: 2,
            nome: "Angelo",
            cognome: "Angeletti",
            anni: 49
        },
        {
            id: 3,
            nome: "Giorgio",
            cognome: "Giorgietti",
            anni: 61
        },
    ]

    const [
        personale,
        setPersonale
    ] = useState<Array<Persona>>(anagrafica)


    return (
        <div style={grey}>
            <h1>Componente principale per gli Array</h1>


            <br /><br />
            <table border={2}>
                {
                    personale.map(
                        (dato: Persona) => {
                            return <Dettaglio key={dato.id} {...dato} ></Dettaglio>
                        }
                    )
                }

            </table>
        </div >
    )
}