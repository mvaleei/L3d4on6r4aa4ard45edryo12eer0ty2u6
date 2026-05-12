var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var nome = "Fabiola";
//transpilazione
//console.log(nome);
var anni = 60;
var maggiorenne = true;
//console.log(nome + anni + maggiorenne);
var generica = 0;
generica = "Ciao";
generica = false;
var marioRossi = {
    id: 1,
    anni: 29,
    citta: "Bologna",
    nome: "Mario Rossi",
    ruoli: [
        { descrizione: "Impiegato", tempo: 5 },
        { descrizione: "CEO", tempo: 12 },
    ]
};
var giulioVerdi = {
    id: 2,
    anni: 49,
    citta: "Palermo",
    nome: "Giulio Verdi",
    ruoli: [
        { descrizione: "Dirigente", tempo: 20 }
    ]
};
var paoloBianchi = {
    id: 3,
    anni: 33,
    citta: "Pescara",
    nome: "Paolo Bianchi"
};
var anagrafica = [
    marioRossi, giulioVerdi, paoloBianchi
];
var anagrafica2 = [
    marioRossi, giulioVerdi, paoloBianchi
];
//console.log(anagrafica)
//console.log(anagrafica2)
var appartamento = /** @class */ (function () {
    function appartamento(mq, citta, indirizzo, propri) {
        this.mq = 0;
        this.citta = "";
        this.indirizzo = "";
        this.proprietario = "";
        this.mq = mq;
        this.citta = citta;
        this.indirizzo = indirizzo;
        //this.proprietario = propri
        this.setProprietario(propri);
    }
    appartamento.prototype.setProprietario = function (nomeProp) {
        this.proprietario = nomeProp;
    };
    appartamento.prototype.getProprietario = function () {
        return this.proprietario;
    };
    appartamento.calcolo = function (mq, costomq) {
        return mq * costomq;
    };
    return appartamento;
}());
var flaminio = new appartamento(120, "Roma", "Viale Flaminia, 56", "Fabio Fabietti");
//console.log(flaminio)
//console.log(appartamento.calcolo(10, 5000));  
var villa = /** @class */ (function (_super) {
    __extends(villa, _super);
    function villa(mq, citta, indirizzo, propri, trattativa) {
        var _this = _super.call(this, mq, citta, indirizzo, propri) || this;
        _this.trattativa = "Pubblica";
        _this.trattativa = trattativa;
        return _this;
    }
    return villa;
}(appartamento));
var eur = new villa(200, "Roma", "Viale Europa, 44", "Mario Rossi", "Privata");
console.log(eur);
