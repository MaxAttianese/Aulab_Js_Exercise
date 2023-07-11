/* Una palestra ammette solo donne curvy dove il curvy è valutato tramite l'indice di massa corporea.
Richiesti il genere, l'altezza e il peso del cliente (tramite prompt) valutare se al cliente è permesso l'iscrizione alla palestra. */

// peso / altazza²

let imc = 0;

function calcImc(weight, height) {

    imc = weight / height;

    return imc;

};

let sex = prompt("M o F?");

calcImc(parseFloat(prompt("Inserisci Peso in Kg")), Math.pow(parseFloat(prompt("Inserisci altezza in metri")), 2));

if(imc > 25 && sex === "F") {
    
    alert("Congratulazioni! Sei stata ammessa in Palestra.");
}
else{

    alert("Mi dispiace, non sei ammsso/a in Palestra");

};