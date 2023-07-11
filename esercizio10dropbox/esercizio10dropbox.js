/* Scrivi una funzione di uguaglianza che prenda in input due argomenti e restituisca TRUE se i due argomenti sono IDENTICI, FALSE altrimenti.*/


let x = 0;

let y = 0;

function Equal(x,y) {

    if(x === y){

        alert(true);

    }
    else{

        alert(false);

    }

};


Equal(x = parseInt(prompt("")),y = parseInt(prompt("")));