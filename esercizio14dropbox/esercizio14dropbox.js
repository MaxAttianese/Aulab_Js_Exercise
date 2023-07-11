/*Scrivi un programma che dati:

- 2 array di 10 elementi interi casuali compresi tra 1 e 10,
- il tipo di operazione aritmetica da effettuare, una delle seguenti:

addizione
sottrazione
moltiplicazione
divisione

Esegua il calcolo tra ogni elemento dei due array, salvando ciascun risultato in un terzo array d’appoggio.*/



let arr1 = [];

for (let i = 0; i < 10; i++){

  arr1.push(Math.round(Math.random() * (10 - 1) + 1));

};

console.log(arr1);

let arr2 = [];

for (let i = 0; i < 10; i++){

  arr2.push(Math.round(Math.random() * (10 - 1) + 1));

};

console.log(arr2);

let arrapp = [];

function sumArray(arr1, arr2){



  for (let i = 0; i < arr1.length; i++){
  
    arrapp.push(arr1[i] + arr2[i])
  
  }
  
  return arrapp;

}

sumArray(arr1, arr2);

console.log(arrapp);