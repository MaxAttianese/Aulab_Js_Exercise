/*  Scrivi un programma che, dato il numero dei tiri da effettuare per ciascun giocatore (N),
  simuli un gioco di dadi tra due utenti, stampando il giocatore che ha totalizzato più punti,
  supponendo che ogni dado abbia al massimo 6 facce, ogni giocatore tirerà il dado N volte, ciò  significa che verrà generato un numero casuale ad ogni tiro che sarà sommato ai precedenti per calcolare il punteggio del giocatore. */



let user1throw = parseInt(prompt("Inserisci il numero di lanci del dado da effettuare"));

let user2throw = parseInt(prompt("Inserisci il numero di lanci del dado da effettuare"));



let point1 = 0;

let point2 = 0;



for (let t = 0; t < user1throw; t++) {

  point1 = point1 + Math.floor(Math.random() * (6 - 1) + 1)

};

console.log(point1);

for (let t = 0; t < user2throw; t++) {

  point2 = point2 + Math.floor(Math.random() * (6 - 1) + 1)

};

console.log(point2);

if (point1 > point2) {

  alert("Il Player1 ha vinto");

}
else {

  if (point2 > point1) {

    alert("Il Player2 ha vinto");

  }
  else {

    if (point1 == point2) {

      alert("Pareggio");

    };
  };
};