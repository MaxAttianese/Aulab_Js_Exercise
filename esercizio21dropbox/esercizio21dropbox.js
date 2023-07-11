/* Scrivi un programma che dato un array di 10 numeri interi ordinati in modo casuale li riordini in modo decrescente. Prova poi ad ordinarli in modo crescente. */



arr = [3, 7, -2, 5, 8, 1, 2, 5, 6, -4];


/* function ordCresc(array){
    array.sort();
    return array;
}; */

function ordCresc(array){

    array.sort((left, right) =>{

        return left - right;

    });

    return array;

};

function ordDecr(array){

    array.sort((left, right) =>{

        return right - left;

    });

    return array;

};



let arrCres =  ordCresc(arr);

console.log(arrCres);

let arrDecr = ordDecr(arr);

console.log(arrDecr);