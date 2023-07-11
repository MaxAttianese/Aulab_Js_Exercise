/* Creare 3 paragrafi HTML e 3 bottoni.

- il primo bottone dovrà nascondere i 3 paragrafi e farli ricomparire (E' presente un metodo toggle() di classList che vi permette di aggiungere (se non è presente) o rimuove (se è presente) una classe nella lista delle classi.)
- il secondo bottone dovrà cambiare i colori dei paragrafi in maniera casuale. (in CSS c'è una funzioncina rgb() che richiede 3 valori da 0 a 255 da generare in maniera casuale)
- il terzo bottone dovrà mostrarli in grassetto e farli tornare come prima.

Suggerimenti: potete definire delle classi CSS apposite e utilizzare la proprietà classList di un elemento del DOM oppure utilizzare la proprietà style per definire del CSS inline. */



let paragraph = document.querySelectorAll("p");

console.log(paragraph);

let buttonone = document.getElementById("Compare");

buttonone.addEventListener("click", () =>{

    for(let i = 0; i < paragraph.length; i++) {

        paragraph[i].classList.toggle("d-none");
    
    };
});

let buttoncolor = document.getElementById("Colore");

buttoncolor.addEventListener("click", () =>{

    for(let i = 0; i < paragraph.length; i++) {

        let randomColor = Math.floor(Math.random() * 16777215).toString(16)

            paragraph[i].style.color = "#" + randomColor;

    };    
});


let buttonbold = document.getElementById("Grassetto");


buttonbold.addEventListener("click", () =>{

    for(let i = 0; i < paragraph.length; i++) {

        paragraph[i].classList.toggle("fw-bold");
        
        };
});