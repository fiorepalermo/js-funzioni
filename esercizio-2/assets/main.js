console.log("js caricato");


function getGiornoDellaSettimana(numeroGiorno) {

    if (typeof numeroGiorno !== 'number' || !Number.isInteger(numeroGiorno) || numeroGiorno < 1 || numeroGiorno > 7) {
        return "Errore";
    }

    switch (numeroGiorno) {
        case 1: return "Lunedì";
        case 2: return "Martedì";
        case 3: return "Mercoledì";
        case 4: return "Giovedì";
        case 5: return "Venerdì";
        case 6: return "Sabato";
        case 7: return "Domenica";
        default: return "Errore";
    }
}


const risultatoGiorno = getGiornoDellaSettimana(3);
console.log(risultatoGiorno); 