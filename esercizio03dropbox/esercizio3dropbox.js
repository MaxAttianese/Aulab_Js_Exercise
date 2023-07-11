/* Scrivi un programma che dato:
    a) Un numero totale di gatti
    b) Il numero dei gatti presenti in ogni fila
  Restituisca in output:
    - Il  numero di file risultanti
    - indicare il numero di gatti mancanti per completare una nuova fila */

let cats = parseInt(prompt("Inserisci il numero totale dei gatti"));

let cat4line = parseInt(prompt("Inserisci il numero dei gatti presenti per ogni fila"));



let line = Math.floor(cats / cat4line);

let rest = cats % cat4line;



if (rest == 0) {

  console.log(`Saranno presenti ${line} fila/e e non avanzerà alcun gatto.`);

  alert(`Saranno presenti ${line} fila/e e non avanzerà alcun gatto.`);

}
else{

  console.log(`Saranno presenti ${line} fila/e ed avanzeranno ${rest} gatti.`);

  alert(`Saranno presenti ${line} fila/e ed avanzeranno ${rest} gatti.`);

};
