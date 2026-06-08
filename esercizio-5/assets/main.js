console.log("js caricato");

function classificaBagaglio(pesoKg) {

    if (typeof pesoKg !== 'number' || isNaN(pesoKg) || pesoKg < 0) {
        return "Peso non valido";
    }


    if (pesoKg > 23) {
        return "Collo ingombrante";
    } else if (pesoKg >= 23) {
        return "Bagaglio da stiva";
    } else if (pesoKg >= 10) {
        return "Bagaglio a mano";
    } else {
        return "Bagaglio non categorizzato (leggero)";
    }
}

const categoriaBagaglio = classificaBagaglio(25);
console.log(categoriaBagaglio);