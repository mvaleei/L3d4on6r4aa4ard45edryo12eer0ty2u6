import React, { useState } from "react";

import type { Persona } from "../Interfacce/Persona";


export const Dettaglio = (Parametro: Persona) => {

    const [vedi, setVedi] = useState<boolean>(false)

    let crea: any = ""

    if (vedi) {
        crea = <span>
            {Parametro.nome}
            {Parametro.cognome}
            {Parametro.anni}
        </span>
    }

    return <div>
        {Parametro.id}
        <button
            onClick={
                () => {
                    setVedi(!vedi);
                }
            }
        >{vedi ? "Nascondi" : "Visualizza"}</button>
        {crea}
    </div>
}