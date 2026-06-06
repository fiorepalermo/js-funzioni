function calcAvg() {

    const voto1 = Number(prompt("inserisci il voto 1", 3));
    const voto2 = Number(prompt("inserisci il voto 2", 5));
    const voto3 = Number(prompt("inserisci il voto 3", 4));

    sum = voto1 + voto2 + voto3;

    let avg = sum / 3;

    avg.toFixed(2);

    console.log(avg);

}
