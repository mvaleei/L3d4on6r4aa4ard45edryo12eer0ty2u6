var nome: string = "Fabiola";

//transpilazione

//console.log(nome);


var anni: number = 60

var maggiorenne: boolean = true

//console.log(nome + anni + maggiorenne);

var generica: any = 0

generica = "Ciao"
generica = false

//console.log(typeof (generica))

interface ruolo {
    descrizione: string,
    tempo: number
}

interface persona {
    id: number,
    nome: string,
    anni: number,
    citta: string,
    ruoli?: Array<ruolo>
}


var marioRossi: persona = {
    id: 1,
    anni: 29,
    citta: "Bologna",
    nome: "Mario Rossi",
    ruoli: [
        { descrizione: "Impiegato", tempo: 5 },
        { descrizione: "CEO", tempo: 12 },
    ]
}


var giulioVerdi: persona = {
    id: 2,
    anni: 49,
    citta: "Palermo",
    nome: "Giulio Verdi",
    ruoli: [
        { descrizione: "Dirigente", tempo: 20 }
    ]
}


var paoloBianchi: persona = {
    id: 3,
    anni: 33,
    citta: "Pescara",
    nome: "Paolo Bianchi"
}

var anagrafica: Array<persona> = [
    marioRossi, giulioVerdi, paoloBianchi
]

var anagrafica2: persona[] = [
    marioRossi, giulioVerdi, paoloBianchi
]


//console.log(anagrafica)
//console.log(anagrafica2)

class appartamento {
    mq: number = 0
    citta: string = ""
    indirizzo: string = ""
    private proprietario: string = ""

    constructor(
        mq: number, citta: string, indirizzo: string, propri: string
    ) {
        this.mq = mq
        this.citta = citta
        this.indirizzo = indirizzo
        //this.proprietario = propri
        this.setProprietario(propri)
    }

    setProprietario(nomeProp: string): void {
        this.proprietario = nomeProp
    }

    getProprietario(): string {
        return this.proprietario
    }

    static calcolo(mq: number, costomq: number): number {
        return mq * costomq
    }


}


let flaminio = new appartamento(120, "Roma", "Viale Flaminia, 56", "Fabio Fabietti")
//console.log(flaminio)

//console.log(appartamento.calcolo(10, 5000));  

class villa extends appartamento {
    trattativa: string = "Pubblica";
    constructor(mq: number, citta: string, indirizzo: string, propri: string, trattativa: string) {
        super(mq, citta, indirizzo, propri)
        this.trattativa = trattativa

    }
}



const eur = new villa(200, "Roma", "Viale Europa, 44", "Mario Rossi", "Privata");

console.log(eur);