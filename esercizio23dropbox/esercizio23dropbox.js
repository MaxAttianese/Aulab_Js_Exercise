/* Modificare l’esercitazione 30 affinchè sia richiesto in input la marca di auto attraverso una form e mostrati i risultati della ricerca in una lista html.
(come extra, se voleste eliminare gli elementi presenti in una lista, cercate il metodo hasChildNodes() nella documentazione da richiamare sull’elemento parent). */



// Garage creation

let garage = [];

function Car(marca, modello) {

    this.brand = marca;

    this.model = modello;

};


let car1 = new Car("Fiat", "Punto");
garage.push(car1);

let car2 = new Car("Volkswagen", "Golf");
garage.push(car2);

let car3 = new Car("Fiat", "Tipo");
garage.push(car3);

let car4 = new Car("Volkswagen", "Polo");
garage.push(car4);

let car5 = new Car("Seat", "Leon");
garage.push(car5);

let car6 = new Car("Peugeot", "208");
garage.push(car6);



console.log(garage);

// Function searchModel creation



function searchModel(marca) {

    let modelPresent = [];

    for(let i = 0; i < garage.length; i++) {

        if(garage[i].brand === marca) {

            modelPresent.push(garage[i].model);

        }

    }

    return modelPresent;

};

//searchModel(prompt("Inserisci Marca Automobile di Preferenza"))

// Show to video modelPresent

let theform = document.getElementById("theform");

let theInput = document.getElementById("theInput");

let thebutton = document.getElementById("thebutton");

let theUl = document.getElementById("theUl");

theUl.classList.add("list-group");

theUl.classList.add("list-group-flush");


theform.addEventListener("submit", (event) =>{

    event.preventDefault();

    while(theUl.hasChildNodes() == true){

        if(theUl.hasChildNodes()){

            theUl.removeChild(theUl.firstChild)

        }

    };

    let foundCars = searchModel(theInput.value);

    foundCars.forEach((model) => {

        let theLi = document.createElement("li");

        theLi.classList.add("fs-5");

        theLi.classList.add("fw-bold");

        theLi.classList.add("list-group-item");

        theLi.textContent = model;

        theUl.appendChild(theLi);

    });

});
