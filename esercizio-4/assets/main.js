console.log("js caricato");

function getStatoSpedizione(codiceStato) {

    if (typeof codiceStato !== 'number' || !Number.isInteger(codiceStato)) {
        return "Stato sconosciuto";
    }

    switch (codiceStato) {
        case 1:
            return "In elaborazione";
        case 2:
            return "Spedito";
        case 3:
            return "Consegnato";
        default:
            return "Stato sconosciuto";
    }
}


const statoAttuale = getStatoSpedizione(2);
console.log(statoAttuale); 