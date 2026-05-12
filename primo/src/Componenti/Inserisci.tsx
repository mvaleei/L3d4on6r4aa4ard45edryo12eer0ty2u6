import React, { useState } from "react";

export const Inserisci = () => {


    //hook   consente di usare lo state dentro il functional component
    /*
    const [
        nomedellostato,
        nomedellafunzionecheaggiornalostato
    ]
        = useState<string>("valore di default")
    */


    //var nome: string = "Dario"      //props

    const [     //stato del componente (nome)
        nome,
        setNome
    ] = useState<string>("Nome di default")


    const [
        anni,
        setAnni
    ] = useState<number>(15)


    /*
    function cambia() {
        //nome = "Fabio"
        setNome("Fabio");
        console.log(nome);
    }
    */


    return (
        <div>
            <h2>Componente per inserire i dati</h2>
            <div>Il tuo nome è: {nome}</div>
            <label htmlFor="">Digita il tuo nome</label>
            <input
                type="text"
                onChange={
                    (oggettoScatenante: any) => {
                        setNome(oggettoScatenante.target.value)
                    }
                }
            />
            <button
                onClick={
                    () => {
                        alert(nome + "-" + anni)
                    }
                }
            >Visualizza nome</button>
            <br />
            <label htmlFor="">Digita i tuoi anni</label>
            <input
                type="number"
                onChange={
                    (oggettoAnni: any) => {
                        setAnni(oggettoAnni.target.value);
                    }
                }

            />  <span>{anni}</span>
        </div>
    )
}