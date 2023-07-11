/* Scrivi un programma che dato un numero intero compreso tra 1 e 7
  visualizzi il corrispondente giorno della settimana. */



let day = parseInt(prompt("inserisci un numero compreso tra 1 e 7"));



if (day < 0 || day > 7) {
    console.log("Il numero inserito non è valido.");
    alert("Il numero inserito non è valido.");
}
else{
    if(day == 1) {
        console.log("Il giorno corrispondente è Lunedì");
        alert("Il giorno corrispondente è Lunedì");
    }
    else {
        if(day == 2) {
            console.log("Il giorno corrispondente è Martedì");
            alert("Il giorno corrispondente è Martedì");
        }
        else {
            if(day == 3) {
                console.log("Il giorno corrispondente è Mercoledì");
                alert("Il giorno corrispondente è Mercoledì");
            }
            else {
                if(day == 4) {
                    console.log("Il giorno corrispondente è Giovedì");
                    alert("Il giorno corrispondente è Giovedì");
                }
                else {
                    if(day == 5) {
                        console.log("Il giorno corrispondente è Venerdì");
                        alert("Il giorno corrispondente è Venerdì");
                    }
                    else {
                        if(day == 6) {
                            console.log("Il giorno corrispondente è Sabato");
                            alert("Il giorno corrispondente è Sabato");
                        }
                        else {
                            if(day == 7) {
                                console.log("Il giorno corrispondente è Domenica");
                                alert("Il giorno corrispondente è Domenica")
                            }
                        }
                    }
                }
            }
        }
    }
};