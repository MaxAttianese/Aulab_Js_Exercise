/* Un negozio offre uno sconto del 20% su tutti i prodotti.
Se il prezzo originale di un prodotto è di 50 euro, quanto costerà dopo lo sconto? */



let price = 0;

function calcSales(originalPrice, sales){

    salesvalue = sales / 100;

    priceSales = originalPrice * salesvalue;

    price = originalPrice - priceSales;
    
    return price;

};

calcSales(parseFloat(prompt("Inserisci il Prezzo dell'Articolo")), parseFloat(prompt("Inserisci lo Sconto")))



alert(`Il prezzo dell'articolo scontato è: ${price}€`)

console.log(price);