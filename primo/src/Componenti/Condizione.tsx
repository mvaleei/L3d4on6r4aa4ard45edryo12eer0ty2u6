import React, { useState } from "react";

export const Condizione = () => {

    const [
        anni,
        setAnni
    ] = useState<number>(27)


    let visualizza: any = ""
    if (anni < 16) {
        visualizza = <div>Sei troppo piccolo, non posso parlarne della patente</div>
    }
    else if (anni >= 16 && anni <= 17) {
        visualizza = <div>Tipologia persona: "Minorenne"</div>
    }
    else {
        visualizza = <div>Tipologia persona:"Maggiorenne"</div>
    }

    function vedi() {
        if (anni < 16) {
            return <div>Sei troppo piccolo, non posso parlarne della patente</div>
        }
        else if (anni >= 16 && anni <= 17) {
            return <div>Tipologia persona: "Minorenne"</div>
        }
        else {
            return <div>Tipologia persona:"Maggiorenne"</div>
        }
    }

    return (
        <div>
            <h2>Componente condizionale</h2>
            <h3>Anni dichiarati: {anni}</h3>
            <label htmlFor="">Inserisci gli anni</label>
            <input
                type="number"
                onChange={
                    (dato: any) => {
                        setAnni(dato.target.value);
                        //vedi()
                    }
                }
            />

            {
                vedi()
                //visualizza
                //<div>Tipologia persona: {anni > 17 ? `"Maggiorenne" - 'Ok per la patente': ${anni}` : "Minorenne"}</div>  
            }


        </div>
    )
}