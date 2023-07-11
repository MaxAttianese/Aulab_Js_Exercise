/* Scrivi un programma che dato l'anno corrente e un anno di nascita determini:
- l'età della persona,
- quanti anni sono necessari per raggiungere i 100
Restituisca in output entrambi i risultati. */

let currentYear = parseInt(prompt("Inserisci l'anno in corso"));

let yearBirth = parseInt(prompt("Inserisci l'anno di nascita"));



if (currentYear < yearBirth) {

    alert("Hai sbagliato ad inserire l'anno corrente.");

}


let age = currentYear - yearBirth;

let tooHundred = 100 - age;



console.log(`Tu hai ${age} anni e ti mancano ${tooHundred} anni per arrivare a 100.`);

alert(`Tu hai ${age} anni e ti mancano ${tooHundred} anni per arrivare a 100.`)