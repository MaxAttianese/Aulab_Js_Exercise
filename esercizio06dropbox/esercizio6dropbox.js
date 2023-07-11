/* Esercitazione 14 - JavaScript 
  Scrivi un programma che converta un voto numerico (v) in un giudizio seguendo questi parametri:
    v < 18: insufficiente
    18 <= v < 21: sufficiente
    21 <= v < 24: buono
    24 <= v < 27: distinto
    27 <= v <= 29: ottimo
    v = 30: eccellente */



let vote = parseInt(prompt("Inserisci il voto ricevuto"));



if(vote < 0 || vote > 32){
    alert("Il voto inserito non è catalogabile");
}
else {
    if(vote < 18) {
    alert("Insufficente");
    } 
    else {
        if(vote >= 18 , vote < 21) {
        alert("Sufficente");
        }
        else {
            if(vote >= 21 , vote < 24) {
                alert("Buono");
            }
            else {
                if(vote >= 24 , vote < 27) {
                    alert("Distinto");
                }
                else {
                    if(vote >= 27 , vote <= 29) {
                        alert("Ottimo");
                    }
                    else {
                        if(vote > 29 , vote < 31) {
                            alert("Eccellente");
                        }
                        else {
                            if(vote >= 31 , vote <= 32) {
                                alert("Eccellente con Lode");
                            };
                        };
                    };
                };
            };
        };
    };
};