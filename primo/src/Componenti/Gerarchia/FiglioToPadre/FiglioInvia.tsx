import React, { useState } from "react";


const celeste: any = {
    backgroundColor: "cyan",
    width: '80%'
}

interface oggettoRicevuto {
    funzioneRicevuta: (nomeDaConsegnare: string) => void,
    funzioneAnni: (anniInvia: number) => void
}

export const FiglioInvia = ({ funzioneRicevuta, funzioneAnni }: oggettoRicevuto) => {

    const [nominativo, setNominativo] = useState<string>("")

    return <div style={celeste}>
        <h3>Componente figlio per INVIARE dati al padre</h3>

        <label htmlFor="">Digita il tuo nome</label>
        <input
            type="text"
            onChange={
                (digitato: any) => {
                    setNominativo(digitato.target.value);
                }
            }
        />  <span>{nominativo}</span>
        <button
            onClick={
                () => {
                    funzioneRicevuta(nominativo);
                }
            }

        >Invia nominativo al padre</button>
        <button
            onClick={
                () => {
                    funzioneAnni(55)
                    funzioneRicevuta(nominativo);
                }
            }

        >Invia dati al padre</button>
    </div >
}