/* Parte 1:
Scrivere il bot che ripartisce un array di studenti in maniera casuale all'interno delle aule studio.
Ogni aula studio può contenere al max 4 studenti. Utilizzare meno aule studio possibili!

Parte 2:

Creare una pagina HTML/CSS (potete includere Bootstrap eventualmente) al fine di mostrare il risultato della generazione dei buddy agli studenti (per mezzo del DOM). */


const students = [
    'Thomas Armao',
    'Carlo Sinatra',
    'Tommaso Coppolino',
    'Giovanni De Cola',
    'Alexis_',
    'Alessandra Manara',
    'Sulayman',
    'Chiara Cassarà',
    'Antonio Annunziata',
    'Papa_Mbath',
    'Alessio Canella',
    'Brian Luis Ramirez',
    'Umberto Benzoni',
    'Silvio Gravina',
    'Alessandro Codega',
    'Guilherme Nicacio',
    'Rocco Clemente',
    'Michele Depalma',
    'Valerio Gemelli',
    'Bamogo Tewende',
    'Alioune Gueye',
    'Francesco Ziccardi',
    'Francesco Margarito',
    'Alessandro Soccio',
    'Paola9666',
    'Elisa Moratto',
    'Marilù Moscato',
    'Cristina Murga',
    'Synixa_',
    'Antony De Lellis',
    'FrancescoMazzanti',
    'Cristian Dessolis',
    'Biagio Trotta',
    'Pierluigi Palmisano',
    'salvatore.dandrea',
    'Massimiliano Attianese',
    'Ahmed Mansour',
    'Amir Ahmic',
    'Nunzrigl',
    'Vinicius Gomes',
    'Elisa95d',
    'Cristina Strigini',
    'Ayoub Gasmi',
    'Loreno Lopez',
    'Stefano Simonetti',
    'Davide Savo'
];

let scholars = [];

//Duplicate students

function duplicateStudents(students) {

    students.forEach((element) => {
        
        scholars.push(element);
    });
}

duplicateStudents(students);



let buddy = [];

let buddySliced = [];

let buddySecondary = [];



//Create rooms with 4 students (the last room has 2 students)

function createBuddy(scholars, buddy) {

    while (scholars.length > 0) {

        n = Math.round(Math.random() * ((scholars.length + 1) - 0) + 0);

        if (scholars[n] != undefined) {

            buddySliced = scholars.splice(n, 1);

            buddySecondary.push(buddySliced[0]);

        };

        if (buddySecondary.length == 4) {

            buddy.push(buddySecondary);

            buddySecondary = [];

        };


    };
    if (buddySecondary.length >= 1) {

        buddy.push(buddySecondary);

        buddySecondary = [];

    };

};


createBuddy(scholars, buddy);


// Rooms container

let classroomsContainer = document.getElementById("classrooms");


// Create graphic Rooms

function createClassrooms(id, scholars) {

    let classroom = document.createElement("div");
    classroom.classList.add("col-12", "col-md-6", "col-xl-3", "p-5");
    classroomsContainer.appendChild(classroom);

    let classroombody = document.createElement("div");
    classroombody.classList.add("card");
    classroombody.setAttribute("style", "width: 18rem");
    classroom.appendChild(classroombody);

    let classroomHeader = document.createElement("div");
    classroomHeader.classList.add("card-header", "text-center", "bg-primary", "text-white", "fw-bold");
    classroomHeader.textContent = `aula ${id + 1}`;
    classroombody.appendChild(classroomHeader);

    let scholarslist = document.createElement("ul");
    scholarslist.classList.add("list-group", "list-group-flush");
    classroombody.appendChild(scholarslist);

    for (let k = 0; k < scholars.length; k++) {

        let scholar = document.createElement("li");
        scholar.classList.add("list-group-item");
        scholar.textContent = scholars[k];
        scholarslist.appendChild(scholar);

    };

};



for (let j = 0; j < buddy.length; j++) {

    createClassrooms(j, buddy[j]);

};





// Button for reload

let reload = document.getElementById("reload");



// Reload

function reloadpage(students, scholars) {



    // AddEventListener on Button

    reload.addEventListener("click" , (event)=>{

        event.preventDefault();
        


        // Delete all graphic rooms

        while(classroomsContainer.hasChildNodes()) {
    
            classroomsContainer.removeChild(classroomsContainer.firstChild);
        
        };



        // Push all students in scholars again from students

        duplicateStudents(students);



        // Create other array for the new rooms

        let buddyReload = [];



        // Generate new rooms

        createBuddy(scholars, buddyReload);
        

        // Create graphic rooms again
        console.log(buddyReload);
        for (let j = 0; j < buddyReload.length; j++) {
    
            createClassrooms(j, buddyReload[j]);
        
        };

    });
};

reloadpage(students, scholars);