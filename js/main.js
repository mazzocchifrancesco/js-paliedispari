
// PALINDROMO ------------------------------------------------------------------------

// Creare una funzione per capire se la parola inserita è palindroma.

function palindromo(input) {
    let inputContr="";
for (let i = input.length-1; i > -1; i--) {
    const lettera = input[i];
    inputContr += lettera;
}
console.log(inputContr)
return inputContr;
}

// Chiedere all’utente di inserire una parola.
const parola = prompt("inserisci la parola da controllare");

const contrario = palindromo(parola);

if (parola==contrario) {
    console.log(`la parola ${parola} è palindroma`);
}
else {
    console.log(`la parola ${parola} non è palindroma`);

}

// PARI E DISPARI ---------------------------------------------------------------------------

// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione).
function pariODispari(num1, num2) {
    let vince="";
    if ((num1+num2)%2==0) {
        vince="pari";
    }
    else {
        vince="dispari";
    }
    return vince;
}

// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.

const scelta = prompt("scegli, pari o dispari?");
const numUtente = parseInt(prompt("scegli un numero da 1 a 5")); 

// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).

const numPc = Math.floor(Math.random() * 5) +1;

if (pariODispari(numUtente,numPc) == scelta) {
    console.log(`il tuo numero è ${numUtente}, il numero del pc è ${numPc}, HAI VINTO!`)
}
else {
    console.log(`il tuo numero è ${numUtente}, il numero del pc è ${numPc}, HAI PERSO!`)
}

