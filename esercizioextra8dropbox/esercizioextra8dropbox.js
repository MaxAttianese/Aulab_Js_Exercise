/* Scrivere una funzione costruttore che si occupi di inizializzare oggetti di tipo Post (i post di instagram o di facebook)
Ogni oggetto di tipo Post avrà:
    - proprietà title, description, likes
    - metodi opportuni (se riuscite ad individuare dei metodi necessari/utili altrimenti nessun problema) tra cui il metodo increaseLike() che si occupa di incrementare di uno il like di un certo post
Scrivere inoltre un array formato da oggetti di tipo Post (quale metodo usiamo per inserire un elemento all’interno di un array??? push… )
Poichè ogni utente scrive uno o più post è il caso di modellizzare oggetti di tipo User i quali hanno, come proprietà, un array di posts da lui creati? */


// Posts
 
const posts = [];

function Post(user, photoUser, imgPost, title, description, likes) {

    this.user = user;

    this.photoUser = photoUser;

    this.imgPost = imgPost;

    this.title = title;

    this.description = description;

    this.likes = likes;

};




let post2 = new Post("Vegeta","https://upload.wikimedia.org/wikipedia/it/thumb/f/ff/Vegeta_-_Dragon_Ball_Kai.png/800px-Vegeta_-_Dragon_Ball_Kai.png","https://comicvine.gamespot.com/a/uploads/original/11112/111122896/4744014-wtsy2f.jpg","Il Re dei Sayan", "Sono l'orgoglioso figlio del Re Vegeta", 0);
posts.push(post2);

let post3 = new Post("Gohan","https://upload.wikimedia.org/wikipedia/it/thumb/c/ce/Gohan.jpg/640px-Gohan.jpg","https://gametimers.it/wp-content/uploads/2022/05/dragon-ball-super-super-hero-gohan.jpg","Il Sayan potenzialmente più forte, ma rimane il più pappamolla", "Voglio studiare non combattere come mio padre", 0);
posts.push(post3);

let post4 = new Post("Junior","https://upload.wikimedia.org/wikipedia/it/0/00/Piccolo_Dragon_Ball.png","https://www.nerdpool.it/wp-content/uploads/2022/05/dragon-ball-super-super-hero-gohan-piccolo.jpg","Il namecciano della terra", "Non mi importava nulla degli esseri umani, ma da quando sono il mentore di Gohan combatto per difendere la terra", 0);
posts.push(post4);

let post5 = new Post("Crillin","https://www.mangaforever.net/wp-content/uploads/2023/05/KrilinX.png","https://upload.wikimedia.org/wikipedia/it/d/d5/Crilin.png","Ho battuto Gesù", "Sono risorto più volte di chiunque altro, grazie sfere del drago", 0);
posts.push(post5);

let post6 = new Post("Goku","https://upload.wikimedia.org/wikipedia/it/4/48/Son_Goku_-_Dragon_Ball_Kai.png","https://images.everyeye.it/img-notizie/dragon-ball-z-fan-ricrea-goku-vs-vegeta-stop-motion-v3-450329-1280x960.jpg","Ho sempre beffato Vegeta", "Lui è il principe dei Sayan, ma io ho raggiunto tutte le traformazioni sempre per prima", 0);
posts.push(post6);

let post7 = new Post("Mr.Satan","https://anime.everyeye.it/public/immagini/21092020/dragon-ball_notizia.jpg","https://i.ytimg.com/vi/vRVNe1IP74I/maxresdefault.jpg","L'unico e vero Campione Riconosciuto dalla terra", "Vi salverò tutti con la mia potenza", 0);
posts.push(post7);

let post8 = new Post("Vegeta","https://upload.wikimedia.org/wikipedia/it/thumb/f/ff/Vegeta_-_Dragon_Ball_Kai.png/800px-Vegeta_-_Dragon_Ball_Kai.png","https://i.pinimg.com/originals/ce/84/e9/ce84e9e659570febb99e231321bfca17.jpg","It's Over Nine thousand", "Maledetto Kakarot, sei sempre un passo avanti", 0);
posts.push(post8);

let post9 = new Post("Goku","https://upload.wikimedia.org/wikipedia/it/4/48/Son_Goku_-_Dragon_Ball_Kai.png","https://images.everyeye.it/img-notizie/e-goku-vero-villain-dragon-ball-fan-scagliano-protagonista-v4-649311.jpg","Non sono il migliore in tutto", "Vegeta oltre ad essere un grande combattente è un padre ed un marito amorevole e presente cosa che a me non esce tanto bene", 0);
posts.push(post9);

let post10 = new Post("Shenron","https://images5.alphacoders.com/725/725250.jpg","https://c4.wallpaperflare.com/wallpaper/356/868/951/dragon-ball-dragon-ball-z-shenron-son-goku-wallpaper-preview.jpg","L'universo Pazzo", "Penso siano tutti pazzi e mi rompono sempre le palle che raccolgono le maledette sfere invocandomi ogni due per tre, MALEDETTI!!!", 0);
posts.push(post10);

console.log(posts);

const users = [];

function User(user, post) {

    this.user = user;
    
    this.post = post;

};

//Users


let user1 = new User("Goku", []);
users.push(user1);

let user2 = new User("Vegeta", []);
users.push(user2);

let user3 = new User("Gohan", []);
users.push(user3);

let user4 = new User("Junior", []);
users.push(user4);

let user5 = new User("Crillin", []);
users.push(user5);

let user6 = new User("Mr.Satan", []);
users.push(user6);

let user7 = new User("Shenron", []);
users.push(user7);

for (let i = 0; i < posts.length; i++) {

    for (let k = 0; k < users.length; k++) {

        if (posts[i].user === users[k].user) {

            users[k].post.push(posts[i]);

        }

    }

};

console.log(users);

let uC = document.getElementById("uC");

function createPost(imgPost, titlePost, descriptionPost, likePost) {

    let cardCol = document.createElement("div");
    cardCol.classList.add("col-12", "col-md-4", "col-lg-3", "p-4");
    uC.appendChild(cardCol);

    let cardPost = document.createElement("div");
    cardPost.classList.add("card");
    cardPost.setAttribute("style", "18rem");
    cardCol.appendChild(cardPost);

    let imgCard = document.createElement("img");
    imgCard.classList.add("img-fluid");
    imgCard.setAttribute("src", imgPost);
    imgCard.setAttribute("alt", "Foto Post");
    cardPost.appendChild(imgCard);

    let divUser = document.createElement("div");
    divUser.classList.add("card-body");
    cardCol.appendChild(divUser);

    let titleCard = document.createElement("h5");
    titleCard.classList.add("card-title","py-3");
    titleCard.textContent = titlePost;
    divUser.appendChild(titleCard);

    let paragraphCard = document.createElement("p");
    paragraphCard.classList.add("card-text", "pb-2");
    paragraphCard.textContent = descriptionPost;
    divUser.appendChild(paragraphCard);

    let divLike = document.createElement("div");
    divLike.classList.add("card-body");
    cardCol.appendChild(divUser);

    let buttonCard = document.createElement("button");
    buttonCard.setAttribute("id", "my-button");
    buttonCard.classList.add("btn", "btn-primary");
    buttonCard.textContent = "Mi Piace"
    divUser.appendChild(buttonCard);

    let likeCard = document.createElement("span");
    likeCard.classList.add("ps-3");
    likeCard.setAttribute("id", "Count");
    likeCard.textContent = likePost;
    divUser.appendChild(likeCard);

};

for (let i = 0; i < posts.length; i++) {

    createPost(posts[i].imgPost, posts[i].title, posts[i].description, posts[i].likes)

};



let button = document.querySelectorAll("button");
console.log(button);

let display = document.querySelectorAll("span");
console.log(display);

let count = [];

for (let i = 0; i < posts.length; i++) {

    count.push(0)

}


for (let i = 0; i < posts.length; i++) {

    button[i].addEventListener("click", function() {

    count[i] += 1

    display[i].innerHTML = count[i]

})
}







































/*for(let i = 0; i < posts.length; i++){
if(posts[i].user === users[0].user ){
    users[0].post.push(posts[i])
}
else{
    if(posts[i].user === users[1].user ){
        users[1].post.push(posts[i])
    }
    else{
        if(posts[i].user === users[2].user ){
            users[2].post.push(posts[i])
        }
        else{
            if(posts[i].user === users[3].user ){
                users[3].post.push(posts[i])
            }
            else{
                if(posts[i].user === users[4].user ){
                    users[4].post.push(posts[i])
                }
                else{
                    if(posts[i].user === users[5].user ){
                        users[5].post.push(posts[i])
                    }
                    else{
                        if(posts[i].user === users[6].user ){
                            users[6].post.push(posts[i])
                        }
                    }
                }
            }
        }
    }
}
}*/
