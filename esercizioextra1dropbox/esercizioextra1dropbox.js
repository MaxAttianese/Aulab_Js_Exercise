// Si riscriva un programma per il calcolo dell’area del rettangolo.

let area = 0;

function calcArea(base, height){

    area = base * height;
    
    return area

};

calcArea(base = parseInt(prompt("Inserire il Valore della Base del Rettangolo")), height = parseInt(prompt("Inserire il Valore dell' Altezza del Rettangolo")))


console.log(`L'area del rettangolo è: ${area}m²`);

alert(`L'area del rettangolo è: ${area}m²`);