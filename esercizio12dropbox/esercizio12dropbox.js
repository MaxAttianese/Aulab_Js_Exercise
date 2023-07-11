// Scrivi una funzione che prenda in input una stringa e restituisca TRUE se è palindroma, FALSE se non lo è.

let str = "";

contr = [];

let controllo = "";



function palindromo(str) {

    str = str.replace(/\W/g, "");

    str = str.split("");
    
    console.log(str);

    contr = str.toReversed();
    
    console.log(contr);

    
    
    for(let i = 0; i < str.length; i++){
       
        if (str[i] == contr[i]){
    
            controllo = "true"
    
        }
        else{
    
            controllo = "false"
    
        }
    };

    
    if(controllo == "true"){
    
        alert("E' un Palindromo");
    }
    else {
        
        alert("Non è un Palindromo");
    
    };
};



palindromo(str = prompt("Inserire Parola/Frase"));