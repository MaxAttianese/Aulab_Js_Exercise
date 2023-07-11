/* Stampare tutti i numeri da 1 a 100 considerando le seguenti particolarità:

- se un numero è multiplo di 3 stampare, al suo posto, la stringa Fizz
- se un numero è multiplo di 5 stampare, al suo posto, la stringa Buzz
- se un numero è multiplo di 15 stampare, al suo posto, la stringa FizzBuzz */

let number = parseInt(prompt("Inserisci il limite massimo"));


function printMulti(number) {

    for(let i = 0; i <= number; i++) {

        if(i != 0 && i % 3 == 0 && i % 5 == 0){
    
            console.log("FizzBuzz");
        
        }
        else if(i != 0 && i % 3 == 0) {
    
            console.log("Fizz");
    
        }
        else if(i != 0 && i % 5 == 0) {
    
            console.log("Buzz");
    
        }
        else{
    
            console.log(i);
    
        };
    };
};

printMulti(number);