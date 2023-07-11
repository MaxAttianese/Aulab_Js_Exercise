/* Si scriva un programma che definisca
- una variabile che ha come valore il numero di partecipanti al party
- una variabile che ha come valore le bottiglie di birra che sono state acquistate
- una variabile che ha come valore la capacità delle bottiglie
e stampi in output quanta birra può bere ogni partecipante (in media e responsabilmente 😆 ). */



let beer4People = 0;

function calcqntBeer(peopleatParty,bottleNumber, bottleCapacity){
    
    let totalL = 0;

    totalL = bottleNumber * bottleCapacity;

    beer4People = totalL / peopleatParty;

    return beer4People;
};

calcqntBeer(parseInt(prompt("Inserisci il numero di partecipanti al Party")), parseInt(prompt("Il numero di bottiglie acquistate")), parseFloat(prompt("Valore litri di ogni Bottiglia")));



console.log(`${beer4People} Litro/i per ogni partecipante`);

alert(`${beer4People} Litro/i per ogni partecipante`);