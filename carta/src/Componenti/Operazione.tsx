import React, { useState } from "react";

const grigio: any = {
    backgroundColor: "grey",
    width: '80%'
}


interface ricezione {
    saldoRicevuto: number,
    funzionePadre: (nuovoSaldo: number) => void,
    tipoUtente: number       //0 - Prelevare    |     1 - Versare   |    2 - calcolo interessi   |  3  -  prelievo di miamoglie
}


export const Operazione = ({ saldoRicevuto, funzionePadre, tipoUtente }: ricezione) => {

    const [importo, setImporto] = useState<number>(0);

    let visualizza: any = "";


    if (tipoUtente == 0) {
        visualizza = <label htmlFor="">Saldo attuale: {saldoRicevuto}</label>
    }

    return (
        <div style={grigio}>
            <label htmlFor="">Importo da {tipoUtente == 1 ? "versare" : "prelevare"}</label>
            <input
                type="number"
                onChange={
                    (digitato) => {
                        setImporto(parseInt(digitato.target.value));
                    }
                }
            />  <span>{importo}</span>
            <button
                onClick={
                    () => {
                        if (tipoUtente == 0) {
                            if ((saldoRicevuto - importo) < 0) {
                                alert("Attenzione, fondi non disponibili")
                            }
                            else {
                                funzionePadre(saldoRicevuto - importo)
                            }
                        }
                        else {
                            //var somma = saldoRicevuto * 1 + importo * 1
                            //console.log(somma)
                            if ((saldoRicevuto + importo) > 500) {
                                alert("Attenzione, budget superato, cambiare importo");
                            }
                            else {
                                funzionePadre(saldoRicevuto + importo)
                            }
                        }
                    }
                }
            >Conferma {tipoUtente == 1 ? "Versamento" : "Prelevamento"}</button>
            {visualizza}
        </div>
    )
}