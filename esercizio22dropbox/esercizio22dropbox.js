/* Definisci un oggetto che rappresenti un garage, dovrà contenere una lista di automobili.
Per ciascuna automobile (un oggetto => {brand : ‘renault’ , model : ‘twingo’}) definire una marca ed almeno un modello.
Scrivi una funzione che prenda in input una marca e stampi i modelli presenti nel garage di quella stessa marca. */

let garage = [];

function Car(marca, modello, tipo) {

    this.brand = marca;
    
    this.model = modello;
    
    this.type = tipo;

};



let car1 = new Car("Ferrari", "Roma", "Berlina");
garage.push(car1);

let car2 = new Car("Lamborghini", "Gallardo", "Berlina");
garage.push(car2);

let car3 = new Car("Ferrari", "Purosangue", "Suv");
garage.push(car3);

let car4 = new Car("Audi", "R8", "Berlina");
garage.push(car4);

let car5 = new Car("Maserati", "Levante", "Suv");
garage.push(car5);

console.log(garage);

let modelPresent = [];

function searchCar(marca){


    for(let i = 0; i < garage.length; i++) {

        if(marca === garage[i].brand){
    
            modelPresent.push(garage[i].model);
    
        }
        else{
    
            if(marca === garage[i].type){
    
                modelPresent.push(garage[i].brand + ":" + garage[i].model);
    
            };
    
        }
    };
    
    return modelPresent;
};

searchCar(marca = prompt("Inserisci la Marca o il Tipo di Auto (Berlina/Suv)"));

console.log(modelPresent);