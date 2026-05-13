import React, { useState } from "react";

import { FiglioInvia } from "./FiglioInvia";

const giallo: any = {
    backgroundColor: "yellow",
    width: '80%'
}


export const PadreRicevi = () => {

    const [nomeRicevuto, setNomeRicevuto] = useState<string>("Default")

    const [anni, setAnni] = useState<number>(0);


    return <div style={giallo}>
        <h3>Componente padre che RICEVE dati dal figlio</h3>
        <FiglioInvia funzioneAnni={setAnni} funzioneRicevuta={setNomeRicevuto}></FiglioInvia>
        <div>Dal figlio ho ricevuto il seguente nominativo: {nomeRicevuto}</div>
        <div>Dal figlio ho ricevuto i seguenti anni: {anni}</div>
        <br />
    </div>
}