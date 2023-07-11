// Scrivi due funzioni una che prenda in input un array di numeri e restituisca il maggiore, l'altra che restituisca il minore.



let arr = [10, 5, -5, 100, -10, -100];

let arrMax = 0;

let arrmin = 0;



function calcMax(arr){ 

    arrMax = Math.max(...arr);

};

calcMax(arr);

console.log(arrMax);



function calcMin(arr){

    arrmin = Math.min(...arr);

};

calcMin(arr);

console.log(arrmin);



alert(`Il valore minore presente nell'array è: ${arrmin}, mentre quello maggiore è: ${arrMax}`);