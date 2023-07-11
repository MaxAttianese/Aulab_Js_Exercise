// Una persona ha camminato 10 chilometri in 2 ore. Qual è la sua velocità media?



let speed = 0;

function calcSpeed(space, time){

    speed = space / time;

    return speed;

};

calcSpeed(parseFloat(prompt("Inserisci i Km Percorsi")), parseFloat(prompt("Inserisci il tempo impiegato (in ore)")));



alert(`La velocità media è di ${speed}Km/h.`);