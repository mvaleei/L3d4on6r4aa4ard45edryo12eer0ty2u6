import React, { useState } from "react";

import type { Persona } from "../Interfacce/Persona";

const verde: any = {
    backgroundColor: 'cyan',
    width: '80%'
}

export const Struttura2 = () => {

    const [
        nome, setNome
    ] = useState<string>("")

    const [
        cognome, setCognome
    ] = useState<string>("")

    const [
        anni, setAnni
    ] = useState<number>(0)


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
        <div style={verde}>
            <h1>Componente principale per gli Array</h1>
            <table border={1}>
                <tr>
                    <td><label htmlFor="">Nome</label></td>
                    <td>
                        <input
                            type="text"
                            onChange={
                                (digitato: any) => {
                                    setNome(digitato.target.value)
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
                                    setCognome(digitato.target.value)

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
                                    setAnni(digitato.target.value)
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

                                    let nuovo: Persona = {
                                        id: personale.length + 1,
                                        nome: nome,
                                        cognome: cognome,
                                        anni: anni
                                    }
                                    setPersonale([...personale, nuovo])
                                    //console.log(nuovaPersona)
                                }
                            }
                        >Registra</button>
                    </td>
                </tr>
            </table>

            <br /><br />
            <table border={2}>
                {
                    personale.map(
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