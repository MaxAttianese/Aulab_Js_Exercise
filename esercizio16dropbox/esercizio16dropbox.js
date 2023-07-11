/* Creare una funzione che prende due argomenti e restituisce tutti i numeri divisibili per il divisore dato. Il primo argomento è una array e il secondo è il divisore. */



let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let n = 2;

let divisori = [];



// Divisibili

function calcDiv(divisore, dividendo){
    
    divisore = arr;
    dividendo = n;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % n == 0){
            divisori.push(arr[i]);
        }
    }
    return divisori;
};

calcDiv(arr, n);

console.log(divisori);



// Non Divisibili

let nonDiv = [];

function calcNonDiv(divisore, dividendo){
    
    divisore = arr;
    dividendo = n;
    
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] % n != 0){
            nonDiv.push(arr[i]);
        }
    }
    return nonDiv;
};

calcNonDiv(arr, n);

console.log(nonDiv);