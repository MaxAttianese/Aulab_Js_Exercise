/* Dato una stringa trovare il numero di volte (occorrenze) in cui si ripetono tutte le vocali.
Ad esempio:

    “ciao mamma guarda come mi divertoooo... con cantatuuu!!!”
    La vocale "a" è presente 7 volte nella stringa
    La vocale "e" è presente 2 volte nella stringa
    La vocale "i" è presente 3 volte nella stringa
    La vocale "o" è presente 7 volte nella stringa
    La vocale "u" è presente 4 volte nella stringa */

let str = "ciao mamma guarda come mi divertoooo... con cantatuuu!!!";

let strWs = str.replace(/\W/g, "");

let strArray = strWs.split("");
    
let arrayA = [];

let arrayE = [];

let arrayI = [];

let arrayO = [];

let arrayU = [];

    
strArray.forEach((character) =>{
    
if(character.toLowerCase() == "a") {
  
    arrayA.push(character);

  };

  if(character.toLowerCase() == "e") {
  
    arrayE.push(character);
    
  };

  if(character.toLowerCase() == "i") {
  
    arrayI.push(character);
    
  };

  if(character.toLowerCase() == "o") {
  
    arrayO.push(character);
    
  };

  if(character.toLowerCase() == "u") {
  
    arrayU.push(character);
    
  };
});

console.log(arrayA);

console.log(`Nella frase ${str} \n la lettera "a" è ripetuta ${arrayA.length} volta/e, \n la lettera "e" è ripetuta ${arrayE.length} volta/e, \n la lettera "i" è ripetuta ${arrayI.length} volta/e, \n la lettera "o" è ripetuta ${arrayO.length} volta/e, \n la lettera "u" è ripetuta ${arrayU.length} volta/e,`);