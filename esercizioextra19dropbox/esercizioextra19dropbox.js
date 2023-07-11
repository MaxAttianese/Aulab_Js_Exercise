/* Stampare i primi 10 numeri primi.*/


let limit = parseInt(prompt("Inserisci il limite massimo"));

//Limite imposto solo per 1° e 2° verione dell'esercizio
while(limit < 30) {

  if(limit < 30) {

    alert("Il numero deve essere maggiore di 30");
    
    limit = parseInt(prompt("Inserisci il limite massimo"));

  };
};


let count = 0;

// 1° Versione

// Stampare tutti i numeri primi compresi tra 0 e il valore passato dall'user
function printPrimeNumber(number) {

  // Ciclo che stabilisce un i di valore 2 e che incrementa fino ad arrivare al numero dato dall'user
  for(let i = 2; i <= number; i++) {

    //Ciclo che stabilisce un k di valore 1 e che incrementa fino ad arrivare al valore di i
    for(let k = 1; k <= i; k++) {

      //If che controlla il resto della divisione di i / k dove k ad incrementa fino ad arrivare al valore di i
      if(i % k == 0) {

        //Count aumenta ogni volta che il resto della divisione i/k = 0
        count++;
      }

    }   
    // Se alla fine del ciclo count <= 2 vuol dire che i è numero primo in quanto ammette come dividendo solo 1 e se stesso, ciò viene analizzato per ogni i che si genera fino ad arrivare al valore passato dall'user (user=3, i=1 poi i=2, i=3) 
    if(count <= 2){

      console.log(i);

    }

    count = 0;
  };
};


printPrimeNumber(limit);



// 2° Versione

/*let stopTen = 0;

// Stampare sempre e solo i primi 10 numeri primi a prescindere dal valore limite passato dall'user
function printPrimeNumber(number) {

  for(let i = 2; i <= number; i++) {

    for(let k = 1; k <= i; k++) {

      if(i % k == 0) {

        count++;
      }

    }   

    if(count <= 2 && stopTen < 10){

      console.log(i);

      stopTen++;

    }

    count = 0;
  };
};


printPrimeNumber(limit);*/


// 3° Versione

//Stampare tanti numeri primi quanto il valore dato dall'user
/*function printPrimeNumber(number) {

  let i = 2;

  let condition = 0;

  while(condition < number) {

    for(let k = 1; k <= i; k++) {

      if(i % k == 0) {

      count++;

      }

    }   

    if(count <= 2){

      console.log(i);

      condition++;

    }

    count = 0;

    i++;

  };
};


printPrimeNumber(limit);*/