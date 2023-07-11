/* Scrivere un programma che definisca:
- una variabile x contenente il valore 5
- una variabile y contenente il valore 10
Dopo aver definito queste due variabili scambiare il valore delle due variabili (siete liberi di definire ulteriori variabili se necessario). */

let x = 5;

let y = 10;

let t = y;

y = x;

x = t;

console.log(x);

console.log(y);

alert(`Il valore di x è stato sostituito con: ${x}, mentre Il valore di y è stato sostituito con: ${y}`);