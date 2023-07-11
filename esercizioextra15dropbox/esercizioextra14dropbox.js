/* Dato un array di nomi convertire tutti i nomi in maiuscolo ottenendo un nuovo array.
Ad esempio dato ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'] ottenere ['MARCO', 'ENRICO', 'GIORGIA', 'GEORGIANA', 'ANNA', 'LUCA'] */

let names = ['marco', 'enrico', 'giorgia', 'georgiana', 'anna', 'luca'];

let namesUp = names.map((name) =>{

    return name.toUpperCase();
    
});

console.log(namesUp);