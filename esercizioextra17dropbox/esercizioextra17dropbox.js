/* Dato un array di nomi creare un nuovo array di nomi dove solo la prima lettera del nome è maiuscola mentre le altre lettere sono in minuscolo (attenzione alle persone che hanno due nomi… ogni riferimento a Loreno è puramente casuale 😄 ).
Ad esempio dato ['marco’, 'eNRICO', 'GIORGIA', 'georgiana', 'Anna', 'cristian loreno'] ottenere ['Marco', 'Enrico', 'Giorgia', 'Georgiana', 'Anna', 'Cristian Loreno']
Suggerimento: potreste utilizzare il metodo charAt() delle stringhe ed il metodo slice() delle stringhe la cui documentazione la trovate qui https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice */



let names = ['marco', 'eNRICO', 'GIORGIA', 'georgiana', 'Anna', 'cristian loreno'];

//let names = ['marco', 'eNRICO', 'GIORGIA', 'georgiana', 'Anna', 'cristian loreno','Yvonne Maria' , 'Francesco Michele Lorenzo'];

let namesUp = [];

let arrayMoreName = [];

let strMoreName = "";

function resolveFontSize(names) {

    for (let i = 0; i < names.length; i++) {

        if (names[i].includes(" ")) {

            // Se incontra più nomi esporta quell'elemento dell'array
            let moreName = names.slice(i, i + 1);

            // Trasforma l'elento in stringa
            moreName = moreName.join(" ");

            // Crea un array formato da più elementi per quanti sono i nomi della persona
            moreName = moreName.split(" ");

            // Cicliamo uno per volta gli arrey formati modificando gli elementi in modo da ottenere quanto richiesto dall'esercizio
            moreName = moreName.forEach((name) => {

                strMoreName = name.toLowerCase();

                strMoreName = strMoreName.replace(strMoreName.charAt(0), strMoreName.charAt(0).toUpperCase());

                // Pushiamo uno per volta gli elementi trasformati nell'array d'appoggio
                arrayMoreName.push(strMoreName);
            })
            // Pusciamo l'array trasformato in un unica stringa in modo da unire i nomi modificati della persona in un unico elemento dell'array
            namesUp.push(arrayMoreName.join(" "));

            //Azzeriamo l'array d'appoggio in modo che se c'è più di una persona con più nomi una volta risolto il nome di una persona (modifica e push nell'array finale) si passa al nome dellìaòtra senza errori (si accollano tutti i nomi degli individui con più nomi in un unico array)
            arrayMoreName = [];

        }
        else {

            // Se la persona ha un solo nome lavoriamo il singolo elemento srtinga, lo modifichiamo come l'esercizio chiede e lo pushiamo nell'array finale
            let strSingleName = names[i].toLowerCase();

            strSingleName = strSingleName.replace(strSingleName.charAt(0), strSingleName.charAt(0).toUpperCase());

            namesUp.push(strSingleName);

        };
    };
};

resolveFontSize(names);

console.log(namesUp);



















/*names.forEach((name) => {

    for(let i = 0; i < name.length; i++){

        if(name.charAt(i) == " "){

            let doubleName = name.split(" ");

            doubleName.forEach((name) => {
            
                let n = name.toLowerCase();
            
                n = n.replace(n.charAt(0), n.charAt(0).toUpperCase());
            
                namesApp.push(n);
            
            })

            namesApp = namesApp.join(" ");

            names.push(namesApp);

        }
        
    }

    let n = name.toLowerCase();
        
    n = n.replace(n.charAt(0), n.charAt(0).toUpperCase());

    namesUp.push(n);

})

console.log(namesUp);*/


/*names.forEach((name) => {

    console.log(name);

    let n = name.toLowerCase();

    n = n.replace(n.charAt(0), n.charAt(0).toUpperCase());

    namesUp.push(n);


});*/