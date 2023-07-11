/* Dato una stringa trovare il numero di volte (occorrenze) in cui si ripete la vocale o.
Ad esempio:

    "ciao mamma guarda come mi divertoooo... con cantatuuu!!!" 
    La vocale 'o' è presente 7 volte nella stringa */

let str = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

let strArray = str.split("");

let array = [];

strArray.forEach((character) =>{

    if(character.toLowerCase() == "o") {

        array.push(character);
    };
});

console.log(`Nella frase ${str} la lettera "o" è ripetuta ${array.length} volta/e.`);