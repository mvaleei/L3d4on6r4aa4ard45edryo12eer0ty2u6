import React, { useState } from "react";

import { Operazione } from "./Operazione";

const verde: any = {
    backgroundColor: "green"
}


//let saldo: number = 300

export const Master = () => {


    const [saldo, setSaldo] = useState<number>(300);

    return <div style={verde}>
        <h1>Componente master dell'applicazione</h1>
        <h3>Saldo: {saldo}</h3>
        <Operazione tipoUtente={0} funzionePadre={setSaldo} saldoRicevuto={saldo}></Operazione>
        <Operazione tipoUtente={1} funzionePadre={setSaldo} saldoRicevuto={saldo}></Operazione>
        <br /><br />
    </div>
}