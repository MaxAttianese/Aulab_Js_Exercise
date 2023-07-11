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

//OrderBar
let ordDate = document.getElementById("ordDate");



// Resolve Fetch


async function resolveFetch(urlUs, urlPo) {

    let ResponseUs = await fetch(urlUs);

    let objsServerUs = await ResponseUs.json();

    let responsePo = await fetch(urlPo);

    let objsServerPo = await responsePo.json();


    console.log(objsServerUs);

    console.log(objsServerPo);

    for (let i = 0; i < objsServerUs.length; i++) {

        createPosts(objsServerUs[i], objsServerPo[i]);

    };

    filterusers(objsServerUs, objsServerPo);

};

resolveFetch("http://dms.cyberdelia.eu/api/v1/user", "http://dms.cyberdelia.eu/api/v1/post");



// Function create body Card


function createPosts(users, posts) {


    let cardTotalBody = document.createElement("div");
    cardTotalBody.classList.add("col-12", "col-md-4", "pt-5");
    cardTotalBody.setAttribute("style", "width: 22rem");
    adsSpot.appendChild(cardTotalBody);

    let userDiv = document.createElement("div");
    userDiv.classList.add("d-flex", "align-items-center", "py-2", "ps-2", "div-user", "div-box-shadow");
    cardTotalBody.appendChild(userDiv);

    let divImgUser = document.createElement("div");
    divImgUser.classList.add("img-user");
    userDiv.appendChild(divImgUser);

    let imgUser = document.createElement("img");
    imgUser.classList.add("img-user");
    imgUser.setAttribute("src", users.imgSrc);
    imgUser.setAttribute("alt", "Foto utente");
    divImgUser.appendChild(imgUser);

    let firstnameUser = document.createElement("span");
    firstnameUser.classList.add("ps-3", "fw-bold");
    firstnameUser.textContent = users.firstname;
    userDiv.appendChild(firstnameUser);

    let lastnameUser = document.createElement("span");
    lastnameUser.classList.add("ps-1", "fw-bold");
    lastnameUser.textContent = users.lastname;
    userDiv.appendChild(lastnameUser);

    let divbodycard = document.createElement("div");
    divbodycard.classList.add("card", "div-box-shadow", "body-card-size");
    cardTotalBody.appendChild(divbodycard);

    let imgPost = document.createElement("img");
    imgPost.classList.add("img-fluid", "card-img-top", "img-size");
    imgPost.setAttribute("src", posts.imgSrc);
    imgPost.setAttribute("alt", "Foto Post");
    divbodycard.appendChild(imgPost);

    let cardBodycontainer = document.createElement("div");
    cardBodycontainer.classList.add("card-body", "body-size");
    divbodycard.appendChild(cardBodycontainer);

    let titleDescrcontainer = document.createElement("div");
    cardBodycontainer.appendChild(titleDescrcontainer);

    let titlePost = document.createElement("h5");
    titlePost.classList.add("card-title");
    titlePost.textContent = posts.title;
    titleDescrcontainer.appendChild(titlePost);

    let desvriptionPost = document.createElement("p");
    desvriptionPost.classList.add("card-text", "m-0");
    desvriptionPost.textContent = posts.description;
    titleDescrcontainer.appendChild(desvriptionPost);

    let diviconcontainer = document.createElement("div");
    diviconcontainer.classList.add("d-flex", "justify-content-around", "pt-4");
    cardBodycontainer.appendChild(diviconcontainer);

    let divfollower = document.createElement("div");
    diviconcontainer.appendChild(divfollower);

    let follower = document.createElement("span");
    follower.classList.add("fst-italic");
    follower.textContent = "Follower:"
    divfollower.appendChild(follower);

    let followernumb = document.createElement("span");
    followernumb.classList.add("ps-2");
    followernumb.textContent = users.follows.length;
    divfollower.appendChild(followernumb);

    let divthumbs = document.createElement("div");
    diviconcontainer.appendChild(divthumbs);

    let thumbdown = document.createElement("button");
    thumbdown.classList.add("bi", "bi-hand-thumbs-down-fill", "icon-dislike");
    thumbdown.setAttribute("type", "button");
    divthumbs.appendChild(thumbdown);

    let thumbup = document.createElement("button");
    thumbup.classList.add("bi", "bi-hand-thumbs-up-fill", "icon-like");
    thumbup.setAttribute("type", "button");
    divthumbs.appendChild(thumbup);

    let divlikes = document.createElement("div");
    diviconcontainer.appendChild(divlikes);

    let likes = document.createElement("span");
    likes.classList.add("fst-italic");
    likes.textContent = "like:"
    divlikes.appendChild(likes);

    let likesnumb = document.createElement("span");
    likesnumb.classList.add("ps-2");
    likesnumb.textContent = 0;
    divlikes.appendChild(likesnumb);

};



// Search Post
function filterusers(users, posts) {


    formSearch.addEventListener("submit", (event) => {

        event.preventDefault();

        while (adsSpot.hasChildNodes()) {

            adsSpot.removeChild(adsSpot.firstChild);

        };

        let usersFiltered = users.filter((user) => {

            let req = true;

            if (searchBar.value.length > 0) {

                req = user.firstname.toLowerCase().includes(searchBar.value.toLowerCase()) || user.lastname.toLowerCase().includes(searchBar.value.toLowerCase());
            }

            return req;
        });

        filterPosts(usersFiltered, posts);


        return usersFiltered;

    });


    function filterPosts(usersFiltered, posts) {


        let postsfiltered = [];

        for (let i = 0; i < usersFiltered.length; i++) {

            let prova = usersFiltered[i].id.toString();


            for (let i = 0; i < posts.length; i++) {

                if (posts[i].id == prova) {

                    postsfiltered.push(posts[i])
                };

            };
        };

        for (let k = 0; k < usersFiltered.length; k++) {

            createPosts(usersFiltered[k], postsfiltered[k]);

        };

    };

};
