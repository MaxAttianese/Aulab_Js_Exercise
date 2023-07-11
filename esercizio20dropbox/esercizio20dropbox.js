/* La nostra squadra di calcio ha concluso il campionato.
Il risultato di ogni partita ha l'aspetto di "x:y". 
I risultati di tutte le partite sono registrati nell’array.

Esempio :
['1:0','2:0','3:0','4:0','2:1','3:1','4:1','3:2','4:2','4:3'];

Scrivere una funzione che prenda quest’array e conti i punti della nostra squadra nel campionato.
Regole per il conteggio dei punti per ogni partita:

se x > y: 3 punti
se x < y: 0 punti
se x = y: 1 punto; */



let matchs1 = ['1:0', '2:0', '3:0', '4:0', '2:1', '3:1', '4:1', '3:2', '4:2', '4:3']; //30

let matchs2 = ["1:1","2:2","3:3","4:4","2:2","3:3","4:4","3:3","4:4","4:4"]; //10

let matchs3 = ["0:1","0:2","0:3","0:4","1:2","1:3","1:4","2:3","2:4","3:4"]; //0

let matchs4 = ["1:0","2:0","3:0","4:0","2:1","1:3","1:4","2:3","2:4","3:4"]; //15



function calcTotalPoints(PointAllMatchs) {

    let matchstr = PointAllMatchs.join(':');

    let matchsarr = matchstr.split(':');

    let point = 0;

    for (let i = 0; i < matchsarr.length; i += 2) {

        if (parseInt(matchsarr[i]) > matchsarr[i + 1]) {

            point = point + 3;

        }
        else {

            if (matchsarr[i] < matchsarr[i + 1]) {

                point = point + 0;

            }
            else {

                if (matchsarr[i] === matchsarr[i + 1]) {

                    point = point + 1;
                }
            }
        }
    };

    return point;

};

let points1 = calcTotalPoints(matchs1);

let points2 = calcTotalPoints(matchs2);

let points3 = calcTotalPoints(matchs3);

let points4 = calcTotalPoints(matchs4);



console.log(points1);

console.log(points2);

console.log(points3);

console.log(points4);