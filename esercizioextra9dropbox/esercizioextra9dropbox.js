/* Scrivere una funzione costruttore che si occupi di inizializzare oggetti di tipo Dish (il piatto… la portata) per un software di gestione di un ristorante All You Can Eat.
Ogni portata è composta da:

- proprietà name, price, allergeni, quantità massima di portate ordinabili (il sashimi max 1 portata a testa), se il piatto è stato consumato tutto oppure no (si paga il piatto a prezzo pieno se non lo mangiate)
- se riuscite ad individuare dei metodi necessari/utili allora bene altrimenti nessun problema

Creare un array formato da tutti i piatti ordinati da una persona.
Scrivere una funzione che riceve in input un array di prodotti ordinati e calcola il totale da pagare (pranzo 15.00 euro, cena 21.00 euro) considerando che alcuni piatti potrebbero non essere stati consumati interamente. */



// Client
let customer1 = [];


// Dish Creator

function Dish(nameDish, priceDish, allergensDish, maxDish, qtDish, allornot) {

    this.nameDish = nameDish;

    this.priceDish = priceDish;

    this.allergensDish = allergensDish;

    this.maxDish = maxDish;

    this.qtDish = qtDish;

    this.allornot = allornot;

};


let all = "si";

let not = "no";



// Customer 1 Lasagna

let lasagnaqtDish = parseInt(prompt("Numero di portate di Lasagna ordinate"));

let lasagnamaxDish = 3;

while (lasagnaqtDish > lasagnamaxDish) {
   
    if (lasagnaqtDish > lasagnamaxDish) {
   
        alert(`Puoi ordinare massimo ${lasagnamaxDish} portata/e di lasagna`);

        lasagnaqtDish = parseInt(prompt("Numero portate di Lasagne ordinate"));
   
    };

};


let l = 0;

for(let i = 0; i < lasagnaqtDish; i++) {

    l = l + 1;

    let req = prompt(`Hai mangiato tutta la ${l}° porzione di Lasagna? Rispondi si o no`);

    if(req == "si") {

        let lasagnaDish = new Dish("Lasagna", 5, "Glutine", lasagnamaxDish, lasagnaqtDish, all);

        customer1.push(lasagnaDish);
    }
    else{
        if(req == "no") {

            let lasagnaDish = new Dish("Lasagna", 5, "Glutine", lasagnamaxDish, lasagnaqtDish, not); 
            
            customer1.push(lasagnaDish);

        };
    };


};



// Customer 1 Parmigiana

let parmigianaqtDish = parseInt(prompt("Numero di portate di Parmigiana ordinate"));

let parmigianamaxDish = 3;


while (parmigianaqtDish > parmigianamaxDish) {

    if (parmigianaqtDish > parmigianamaxDish) {

        alert(`Puoi ordinare massimo ${parmigianamaxDish} portata/e di parmigiana`);

        parmigianaqtDish = parseInt(prompt("Numero portate di Parmigiana ordinate"));

    };

};


let p = 0;

for(let i = 0; i < parmigianaqtDish; i++) {

    p = p + 1;

    let req = prompt(`Hai mangiato tutta la ${p}° porzione di Parmigiana? Rispondi si o no`);

    if(req == "si") {

        let parmigianaDish = new Dish("Parmigiana", 5, "Glutine", parmigianamaxDish, parmigianaqtDish, all);

        customer1.push(parmigianaDish)
    }
    else{
        if(req == "no") {

            let parmigianaDish = new Dish("Parmigiana", 5, "Glutine", parmigianamaxDish, parmigianaqtDish, not);

            customer1.push(parmigianaDish)

        };
    };

};



// Customer 1 Patatine

let patatineqtDish = parseInt(prompt("Numero di portate di Patatine ordinate"));

let patatinemaxDish = 5;


while (patatineqtDish > patatinemaxDish) {

    if (patatineqtDish > patatinemaxDish) {

        alert(`Puoi ordinare massimo ${patatinemaxDish} portata/e di patatine`);

        patatineqtDish= parseInt(prompt("Numero portate di Patatine ordinate"));

    };

};


let f = 0;

for(let i = 0; i < patatineqtDish; i++) {

    f = f + 1;

    let req = prompt(`Hai mangiato tutta la ${f}° porzione di Patatine? Rispondi si o no`);

    if(req == "si") {

        let patatineDish = new Dish("Patatine", 3, "Glutine", patatinemaxDish, patatineqtDish, all);

        customer1.push(patatineDish);
    }
    else{
        if(req == "no") {

            let patatineDish = new Dish("Patatine", 3, "Glutine", patatinemaxDish, patatineqtDish, not);

            customer1.push(patatineDish);

        };
    };

};



// Customer 1 Cotoletta

let cotolettaqtDish = parseInt(prompt("Numero di portate di Cotoletta ordinate"));

let cotolettamaxDish = 4;


while (cotolettaqtDish > cotolettamaxDish) {

    if (cotolettaqtDish > cotolettamaxDish) {

        alert(`Puoi ordinare massimo ${cotolettamaxDish} portata/e di cotoletta`);

        cotolettaqtDish = parseInt(prompt("Numero portate di Cotoletta ordinate"));

    }

};


let c = 0;

for(let i = 0; i < cotolettaqtDish; i++) {

    c = c + 1;

    let req = prompt(`Hai mangiato tutta la ${c}° porzione di Cotoletta? Rispondi si o no`);

    if(req == "si") {

        let cotolettaDish = new Dish("Cotoletta", 4, "Glutine", cotolettamaxDish, cotolettaqtDish, all);

        customer1.push(cotolettaDish);
    }
    else{
        if(req == "no") {

            let cotolettaDish = new Dish("Cotoletta", 4, "Glutine", cotolettamaxDish, cotolettaqtDish, not);

            customer1.push(cotolettaDish);

        };
    };

};



// Customer 1 Tiramisù

let tiramisuqtDish = parseInt(prompt("Numero di portate di Tiramisù ordinate"));

let tiramisumaxDish = 1;


while (tiramisuqtDish > tiramisumaxDish) {

    if (tiramisuqtDish > tiramisumaxDish) {

        alert(`Puoi ordinare massimo ${tiramisumaxDish} portata/e tiramisù`);

        tiramisuqtDish = parseInt(prompt("Numero portate di Tiramisù ordinate"));

    }

};


let t = 0;

for(let i = 0; i < tiramisuqtDish; i++) {

    t = t + 1;

    let req = prompt(`Hai mangiato tutta la ${t}° porzione di Tiramisù? Rispondi si o no`);

    if(req == "si") {

        let tiramisuDish = new Dish("Tiramsù", 10, "Glutine", tiramisumaxDish, tiramisuqtDish, all);

        customer1.push(tiramisuDish);
    }
    else{
        if(req == "no") {

            let tiramisuDish = new Dish("Tiramsù", 10, "Glutine", tiramisumaxDish, tiramisuqtDish, not);

            customer1.push(tiramisuDish);

        };
    };

};


console.log(customer1);


// Function calcPrice

let luchOrdinner = prompt("Hai pranzato o cenato? pranzo o cena");

function calcTotalPice(customerDishs, luchOrdinner) {

    let price = 0;

    if(luchOrdinner.toLowerCase() == "pranzo") {

        price = 15;

        customerDishs.forEach((dish) => {
            
            if(dish.allornot.toLowerCase() == "no") {

                price = price + dish.priceDish;

            };

        });
    }
    else {

        price = 21;

        if(luchOrdinner.toLowerCase() == "cena") {

            price = 21;
    
            customerDishs.forEach((dish) => {
                
                if(dish.allornot.toLowerCase() == "no") {
    
                    price = price + dish.priceDish;

                }
    
            });
        }
    }

    console.log(price);

    if(luchOrdinner.toLowerCase() == "pranzo"){

        alert(`Il prezzo del tuo pranzo è: ${price}`);

    }
    else{

        if(luchOrdinner.toLowerCase() == "cena"){

            alert(`Il prezzo dela tuo cena è: ${price}`);

        }
    }

    return price;
};

calcTotalPice(customer1, luchOrdinner);