/*   Scrivi un programma che dato un array di numeri, calcoli la media dei valori e restituisca in output la media e tutti i valori minori della media.
Variante: Stampa anche quanti sono i valori minori della media e quanti quelli maggiori. */

let arr = [3, 5, 10, 2, 8];

console.log(arr);

let sum = arr.reduce(function(a,b){
 
    return a+b;

});

let med = sum / arr.length;



let resultMin = [];

let resultMax = [];


function returnMin(arr, med){


    for(let i = 0; i < arr.length; i++){

        if (arr[i] < med){

            resultMin.push(arr[i]);
        }
        else {
        
            resultMax.push(arr[i]);
        }
    }
    
    return resultMin
};



returnMin(arr, med);

console.log(`La medi dei valori dell'array è: ${med} e i valori minori di essa presenti sono: ${resultMin}, quindi vi sono ${resultMin.length} numeri minori della media e ${resultMax.length} maggiori.`);