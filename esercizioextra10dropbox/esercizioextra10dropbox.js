/* Scrivere una funzione costruttore che si occupi di inizializzare oggetti di tipo Player (il calciatore) per il software del FantaCalcio (è un esempio!!!)
Gli oggetti di tipo Player avranno proprietà e metodi opportuni:

    - le proprietà potrebbero essere firstname, lastname, numero della maglia, posizione in campo
    - se riuscite ad individuare dei metodi necessari/utili allora bene altrimenti nessun problema

Scrivere inoltre un array formato da oggetti di tipo Player (quale metodo usiamo per inserire un elemento all’interno di un array??? push… ) che formano una squadra (la juve, il milan, l’inter, …) */



//Html connection

//Form

let formGeneratePlayer = document.getElementById("form-generate-player");

// Firtsname bar

let firstnamePlayer = document.getElementById("firstname-player");

// Lastname bar

let lastnamePlayer = document.getElementById("lastname-player");

// Number T-shirt bar

let numberTshirtplayer = document.getElementById("number-T-shirt");

// Role bar

let roleplayer = document.getElementById("role-player");

//Chose team bar

let teamPlayer = document.getElementById("team-player");





// Juventus

// Porta
let portJuve = document.getElementById("id-port-juve");

// Difesa
let defJuve = document.getElementById("id-def-juve");

// Centrocampo
let centJuve = document.getElementById("id-cen-juve");

// Attacco
let attJuve = document.getElementById("id-att-juve");


// Inter

// Porta
let portInter = document.getElementById("id-port-inter");

// Difesa
let defInter = document.getElementById("id-def-inter");

// Centrocampo
let centInter = document.getElementById("id-cen-inter");

// Attacco
let attInter = document.getElementById("id-att-inter");








// Team

let juventus = [];

let inter = [];



// Create Player
function Player(firstname, lastname, numberTshirt, role, team) {

    this.firstname = firstname;

    this.lastname = lastname;

    this.numberTshirt = numberTshirt;

    this.role = role;

    this.team = team;


};



// Create Array

formGeneratePlayer.addEventListener("submit", (event) => {

    event.preventDefault();

    let firstnamePlayerValue = firstnamePlayer.value

    let player = new Player(firstnamePlayerValue, lastnamePlayer.value, numberTshirtplayer.value, roleplayer.value, teamPlayer.value);


    if (teamPlayer.value == "Juventus") {

        juventus.push(player);

    }
    else {
        if (teamPlayer.value == "Inter") {

            inter.push(player);

        }
    }

    populateTeam(player.firstname, player.lastname, player.numberTshirt, player.role, player.team);


})



// Create Dom

function populateTeam(firstname, lastname, numberTshirt, role, team) {

    let liTeam = document.createElement("li");
    liTeam.classList.add("d-flex", "align-items-center");

    let divNumber = document.createElement("div");
    divNumber.classList.add("position-relative");
    liTeam.appendChild(divNumber);

    let imgTshirt = document.createElement("img");
    imgTshirt.classList.add("img-shirt");
    imgTshirt.setAttribute("src", "https://w7.pngwing.com/pngs/942/409/png-transparent-t-shirt-jersey-computer-icons-football-psd-jersey-soccer-tshirt-angle-white-thumbnail.png");
    imgTshirt.setAttribute("alt", "Foto t-shirt");
    divNumber.appendChild(imgTshirt);

    let spanNumber = document.createElement("span");
    if(numberTshirt < 10) {

        spanNumber.classList.add("position-number-under10");
    }
    else {

        spanNumber.classList.add("position-number");
    }
    spanNumber.textContent = numberTshirt;
    divNumber.appendChild(spanNumber);

    let spanLastname = document.createElement("span");
    spanLastname.classList.add("ps-2");
    spanLastname.textContent = lastname;
    liTeam.appendChild(spanLastname);

    let spanFirstname = document.createElement("span");
    spanFirstname.classList.add("ps-1");
    spanFirstname.textContent = firstname;
    liTeam.appendChild(spanFirstname);



    if (team == "Juventus") {

        if (role == "Portiere") {

            portJuve.appendChild(liTeam);

        }

        if (role == "Difensore") {

            defJuve.appendChild(liTeam);

        }
        if (role == "Centrocampista") {

            centJuve.appendChild(liTeam);

        }
        if (role == "Attaccante") {

            attJuve.appendChild(liTeam);

        }


    }
    else {
        if (team == "Inter") {

            if (role == "Portiere") {

                portInter.appendChild(liTeam);

            }

            if (role == "Difensore") {

                defInter.appendChild(liTeam);

            }

            if (role == "Centrocampista") {

                centInter.appendChild(liTeam);

            }

            if (role == "Attaccante") {

                attInter.appendChild(liTeam);

            }
        }
    }
}



console.log(juventus);

console.log(inter);