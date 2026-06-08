console.log("js caricato");

function etichettaUtentePerEta(eta) {

    if (typeof eta !== 'number' || !Number.isInteger(eta) || eta < 0 || eta > 130) {
        return "Età non valida";
    }

    if (eta < 18) {
        return "Minorenne";
    } else if (eta <= 35) {
        return "Giovane Adulto";
    } else if (eta <= 60) {
        return "Adulto";
    } else {
        return "Senior";
    }
}


const fasciaUtente = etichettaUtentePerEta(26);
console.log(fasciaUtente); 