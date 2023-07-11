// Si riscriva un programma per il calcolo dell’area del cerchio.

let area = 0;

function calcAreaCircle(raggioQuadro, pgreco) {

    area = raggioQuadro * pgreco;

    return area;

};

calcAreaCircle(Math.pow(parseInt(prompt("Inserisci Valore del Raggio")), 2), Math.PI);



console.log(`L'area del cerchio è: ${area}m²`);

alert(`L'area del cerchio è: ${area}²`);