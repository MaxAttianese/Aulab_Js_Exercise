// Scrivi una funzione che dato un numero intero conti da quante cifre è formato. 



let n = 0;



function nnumber(n) {

    if (n > 9999, n < 0) {

        alert("Errore, numero inserito non valido")

    }
    else{

        n = n.toString();

        console.log(n.length);

    };

};



nnumber(n = parseInt(prompt("Inserisci Numero")));