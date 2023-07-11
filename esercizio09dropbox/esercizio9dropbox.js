// Scrivi un programma che stampi i numeri da 1 a 100 andando a capo ogni 10.

let tab = "";

for(let n = 1; n < 101; n++) {

   tab = tab + n + " ";

   if(n % 10 == 0){

      tab = tab + "\n";

   };

};

console.log(tab);