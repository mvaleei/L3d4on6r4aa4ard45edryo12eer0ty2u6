import React, { useState } from "react";

import type { Persona } from "../Interfacce/Persona";

const celeste: any = {
    backgroundColor: 'green',
    width: '80%'
}

export const Struttura = () => {



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



    return (
        <div style={celeste}>
            <h1>Componente principale per gli Array</h1>
            <table border={1}>
                <tr>
                    <td><label htmlFor="">Nome</label></td>
                    <td>
                        <input
                            type="text"
                            onChange={
                                (digitato: any) => {

                                    //creo il nuovo oggetto
                                    let nuovo: Persona = {
                                        id: anagrafica.length + 1,
                                        nome: digitato.target.value,
                                        cognome: nuovaPersona.cognome,
                                        anni: nuovaPersona.anni
                                    }
                                    /*
                                    nuovaPersona.nome = "giorgio";
                                    console.log(nuovaPersona)
                                    */
                                    setNuovaPersona(nuovo);
                                    console.log(nuovaPersona)

                                }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="">Cognome</label></td>
                    <td>
                        <input
                            type="text"
                            onChange={
                                (digitato: any) => {

                                    //creo il nuovo oggetto
                                    let nuovo: Persona = {
                                        id: anagrafica.length + 1,
                                        nome: nuovaPersona.nome,
                                        cognome: digitato.target.value,
                                        anni: nuovaPersona.anni
                                    }
                                    /*
                                    nuovaPersona.nome = "giorgio";
                                    console.log(nuovaPersona)
                                    */
                                    setNuovaPersona(nuovo);
                                    console.log(nuovaPersona)

                                }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td><label htmlFor="">Anni</label></td>
                    <td>
                        <input
                            type="number"
                            onChange={
                                (digitato: any) => {

                                    //creo il nuovo oggetto
                                    let nuovo: Persona = {
                                        id: anagrafica.length + 1,
                                        nome: nuovaPersona.nome,
                                        cognome: nuovaPersona.cognome,
                                        anni: digitato.target.value
                                    }
                                    /*
                                    nuovaPersona.nome = "giorgio";
                                    console.log(nuovaPersona)
                                    */
                                    setNuovaPersona(nuovo);
                                    console.log(nuovaPersona)

                                }
                            }
                        />
                    </td>
                </tr>
                <tr>
                    <td>
                        <button
                            onClick={
                                () => {
                                    console.log(nuovaPersona)
                                }
                            }
                        >Registra</button>
                    </td>
                </tr>
            </table>

            <br /><br />
            <table border={2}>
                {
                    anagrafica.map(
                        (dato: Persona, indice: number) => {
                            return <tr key={dato.id}>
                                <td>{dato.id}</td>
                                <td>{dato.nome}</td>
                                <td>{dato.cognome}</td>
                                <td>{dato.anni}</td>
                                <td>{indice}</td>
                            </tr>
                        }
                    )
                }

            </table>
        </div>
    )
}