/* Dato un array x e un valore y. Tutto ciò che dovete fare è verificare se l'array fornito contiene il valore.
L'array può contenere numeri o stringhe.
Y può essere uno dei due.
Restituire true se l'array contiene il valore, false in caso contrario. */



let x = ['what', 'a', 'great', 'kata'];

let y = 'kat';

let prove = [];



function checkEqual(x , y){

    for(let i = 0; i < x.length; i++){

        if(x[i] === y){

            prove.push(x[i]);

        }
    }

    if (prove == y){

        prove = true;

    }
    else{

        prove = false;

    }

    return prove

};

checkEqual(x, y);

console.log(prove);