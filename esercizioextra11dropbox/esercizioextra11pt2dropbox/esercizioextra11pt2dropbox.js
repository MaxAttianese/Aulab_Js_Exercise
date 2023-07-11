// Parte 1

/* Sviluppare una pagina web simil instagram formata da tutti i post che trovate a questo URL: http://dms.cyberdelia.eu/api/v1/post
Suggerimento: effettuare una chiamata http, metodo GET, tramite fetch api. Come body della risposta http ci sarà un array di oggetti.
Suggerimento: prima di buttarvi sul DOM create manuale di 2 / 3 post con HTML e CSS classico. Dopo di che cancellate l’html e lo ricreate con il DOM.
Proposta: utilizzare Bootstrap */

// Parte 2

/* Ogni oggetto che forma l’array di post ottenuti nell’esercizio precedente ha una proprietà chiamata ownerId contenente l’id dell’utente che ha creato il post.
Conoscendo l’id dell’utente (ad esempio del primo post ownerId è 4) potete ottenere informazioni sull’utente effettuando una chiamata http, metodo GET, all’URL:

http://dms.cyberdelia.eu/api/v1/user/${ownerId}

ad esempio:

http://dms.cyberdelia.eu/api/v1/user/4
Oppure potreste effettuare due fetch (utilizzando il chaining delle promise tramite async e await):

    una verso http://dms.cyberdelia.eu/api/v1/user per ottenere un array di utenti

    una verso http://dms.cyberdelia.eu/api/v1/post per ottenere un array di post

ed utilizzare il metodo find per trovare l’user, autore del post, per mezzo della proprietà ownerId dell’oggetto post.
Per ogni post aggiungere (come su instagram) le informazioni relative all’autore del post (immagine di profilo e nome dell’utente) */

// Parte 3

/* Creare una seconda pagina dove vengono mostrati tutti gli utenti registrati sul nostro social (cioè tutti gli utenti che trovate qui http://dms.cyberdelia.eu/api/v1/user ).
In particolare questa pagina presenta un header html contenente (stilizzato tramite bootstrap oppure manualmente):

    - a sinistra il logo del social (ad esempio il logo di instagram)
   
    - al centro un elemento html input per la ricerca dell’utente tramite firstname
   
    - a destra - una lista di link verso la pagina dei post e verso la pagina degli utenti

Suggerimenti:

    - sull’elemento html input intercettiamo un evento di tipo ‘input’ come riportato qui https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/input_event “oppure” intercettare l’evento submit su una form che contiene l’elemento input (creando un bottone tramite iconcina search)
   
    - il value contenuto in input deve essere utilizzato per filtrare l’array di utenti (tramite loro firstname) al fine di mostrare i soli risultati di ricerca

Per eliminare gli elementi child di un certo elemento parent potete utilizzate il seguente snippet:

    while(parent.hasChildNodes()) {
     parent.removeChild(parent.firstChild);
    } */



//Html Connection
let adsSpot = document.getElementById("adsSpot");

//Form
let formSearch = document.getElementById("formSearch");

// SearchBar
let searchBar = document.getElementById("searchBar");

// SelectBar
let ordDate = document.getElementById("ordDate");




// Resolve Fetch

async function resolveFetch(url) {

    let Response = await fetch(url);
    
    let objsServer = await Response.json();

    console.log(objsServer);

    for(let i = 0; i < objsServer.length; i++) {

      createCard(objsServer[i].firstname, objsServer[i].lastname, objsServer[i].imgSrc, objsServer[i].follows.length);

    };

    filterUser(objsServer);

    return objsServer;
};

resolveFetch("http://dms.cyberdelia.eu/api/v1/user");





// Create Card

function createCard(name, surname, img, followerNumber) {
    
    let cardConteiner = document.createElement("div");
    cardConteiner.classList.add("col-12", "col-md-4", "card", "div-box-bg-shadow", "m-3");
    cardConteiner.setAttribute("style", "width: 22rem");
    adsSpot.appendChild(cardConteiner);

    let imgUser = document.createElement("img");
    imgUser.classList.add("img-user", "mt-3");
    imgUser.setAttribute("src", img);
    imgUser.setAttribute("alt", "Foto Utente");
    cardConteiner.appendChild(imgUser);

    let cardBodyConteiner = document.createElement("div");
    cardBodyConteiner.classList.add("card-body");
    cardConteiner.appendChild(cardBodyConteiner);

    let titleContainer = document.createElement("h5");
    titleContainer.classList.add("card-title", "pb-4", "pt-3");
    cardBodyConteiner.appendChild(titleContainer);

    let firstnameUser = document.createElement("span");
    firstnameUser.classList.add("fw-bold", "shadow-text", "ps-2");
    firstnameUser.textContent = name;
    titleContainer.appendChild(firstnameUser);

    let lastnameUser = document.createElement("span");
    lastnameUser.classList.add("fw-bold", "shadow-text", "ps-2");
    lastnameUser.textContent = surname;
    titleContainer.appendChild(lastnameUser);

    let endCardContainer = document.createElement("div");
    endCardContainer.classList.add("d-flex", "align-items-center", "justify-content-around", "pb-1");
    cardBodyConteiner.appendChild(endCardContainer);

    let followerContainer = document.createElement("div");
    followerContainer.classList.add("pe-3");
    endCardContainer.appendChild(followerContainer);

    let follower = document.createElement("span");
    follower.classList.add("shadow-text");
    follower.textContent = "Follower:";
    followerContainer.appendChild(follower);

    let firstnameNumberUser = document.createElement("span");
    firstnameNumberUser.classList.add( "ps-1", "shadow-text");
    firstnameNumberUser.textContent = followerNumber;
    followerContainer.appendChild(firstnameNumberUser);

    let requestFollowContainer = document.createElement("div");
    requestFollowContainer.classList.add("ps-3");
    endCardContainer.appendChild(requestFollowContainer);

    let btnRequestFollow = document.createElement("button");
    btnRequestFollow.classList.add("btn", "link-hov-card");
    btnRequestFollow.setAttribute("type", "submit");
    btnRequestFollow.textContent = "Follow";
    requestFollowContainer.appendChild(btnRequestFollow);

};





// Filter User

function filterUser(objsServer) {

  formSearch.addEventListener("submit", (event) => {

    event.preventDefault();


    let userFiltered = objsServer.filter((obj) => {

      let req = true;

      if(searchBar.value.length > 0) {

        req = obj.firstname.toLowerCase().includes(searchBar.value.toLowerCase()) || obj.lastname.toLowerCase().includes(searchBar.value.toLowerCase());

      }

      return req;

    });

    orderUser(userFiltered, ordDate.value);

    return userFiltered;

  });
};

// Order User

function orderUser(userFiltered, ordDate) {


  while (adsSpot.hasChildNodes()) {

    adsSpot.removeChild(adsSpot.firstChild);
    
  };

  switch(ordDate) {
    case "CreatedatDec" :
      userFiltered.sort((left, right) =>{

        return left.subscribedAt - right.subscribedAt;

      });
      break;
      case "CreatedatCre" :
        userFiltered.sort((left, right) =>{
  
          return right.subscribedAt - left.subscribedAt;
  
        });
        break;
  };

  for(let i = 0; i < userFiltered.length; i++) {

    createCard(userFiltered[i].firstname, userFiltered[i].lastname, userFiltered[i].imgSrc, userFiltered[i].follows.length);

  };

  return userFiltered
};