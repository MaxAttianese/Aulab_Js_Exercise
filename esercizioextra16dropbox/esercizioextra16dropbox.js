/* Dato un array di nomi filtrare tutti i nomi più corti di 6 lettere.
Ad esempio dato ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'] 
ottenere ['marco', 'anna', 'luca'] */

let names = ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'];

let namesSmall = [];

names.forEach((name) =>{

   if( name.length < 6) {

    namesSmall.push(name);

   };

});

console.log(namesSmall);