
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
