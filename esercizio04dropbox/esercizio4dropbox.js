/* Scrivi un programma che dati sette valori relativi alle temperature della settimana
  stabilisca la giornata più calda e quella più fredda. */

let mon = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Lunedì"));

let tue = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Martedì"));

let wen = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Mercoledì"));

let thu = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Giovedì"));

let fry = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Venerdì"));

let sat = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Sabato"));

let sun = parseFloat(prompt("Inserisci la temperatura massima resgistrata nella giornata di Domenica"));



let max = Math.max(mon, tue, wen, thu, fry, sat, sun);

let min = Math.min(mon, tue, wen, thu, fry, sat, sun);



console.log(`La temperatura massima registrata nella settimana è di ${max}°C mentre la temperatura minima è di ${min}°C.`);

alert(`La temperatura massima registrata nella settimana è di ${max}°C mentre la temperatura minima è di ${min}°C.`)