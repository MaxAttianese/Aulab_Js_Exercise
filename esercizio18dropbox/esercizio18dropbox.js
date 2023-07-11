/* Dato un array di numeri, creare una funzione che restituisca la somma di tutti i numeri positivi.
Nota: se non c'è nulla da sommare, la somma è predefinita a 0. */



let arr = [-2, -3, -5, 2, 3, 5];

let sum = 0;

let maggioriZero = [];



for (let i = 0; i < arr.length; i++) {

    if (arr[i] >= 0) {

        sum = sum + arr[i];

        maggioriZero.push(arr[i]);

    }
    else {

        sum = 0;

    }

};

if (sum > 0) {

    console.log(`La somma degli elementi positivi dell'array che sono ${maggioriZero} è : ${sum}`);

}
else{

    console.log(`La somma è ${sum} in quanto non ci sono valori positivi nell'array`);

};