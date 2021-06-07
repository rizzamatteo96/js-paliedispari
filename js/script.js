//TODO Primo esercizio - Palidroma: Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

//* Chiedere all'utente la parola
var parola = prompt('Inserisci una parola');

if(palindroma(parola)){
    document.getElementById('risultatoParola').innerHTML = 'La parola inserita è palindroma';
} else {
    document.getElementById('risultatoParola').innerHTML = 'La parola inserita non è palindroma';
}


// TODO Secondo esercizio - Pari e Dispari: L’utente sceglie pari o dispari e inserisce un numero da 1 a 5. Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione). Sommiamo i due numeri. Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.

//* 1 Chiedere all'utente se vuole pari o dispari
//* 2 Chiedere all'utente un numero da 1 a 5
//* 3 Generare un numero casuale da 1 a 5
//* 4 Sommare i due numeri
//* 5 Definire se il numero è pari o dispari
//* 6 Dichiarare un vincitore


var pariDispariUser = prompt('pari o dispari');
console.log(pariDispariUser);
var numUser = parseInt(prompt('Inserisci un numero da 1 a 5'));
console.log(numUser);
var numPc = getRndInteger(1, 5);
console.log(numPc);


document.getElementById('pd-user').innerHTML += pariDispariUser;
document.getElementById('n-user').innerHTML += numUser;
document.getElementById('n-pc').innerHTML += numPc;


if(pari(numUser + numPc) && pariDispariUser == 'pari' || !pari(numUser + numPc) && pariDispariUser == 'dispari'){
    // l'utente vince
    document.getElementById('risultatoNum').innerHTML = 'Hai vinto';
} else {
    // l'utente perde
    document.getElementById('risultatoNum').innerHTML = 'Hai perso';
}




//! ---------------SEZIONE PER LE FUNZIONI------------------

//* PRIMO ESERCIZIO
function palindroma(parolaCheck) {
    //* fare in modo che la parola venga verificata al contrario o scritta al contrario e compararla con quella scritta dall'utente

    // Dichiaro la variabile per il controllo
    var parolaRev = '';
    
    // Scrivo la parola al contrario
    for(var i = parolaCheck.length - 1; i >= 0; i--){
        parolaRev += parolaCheck.charAt(i);
    }

    // controllo che le due parole siano uguali
    return parolaCheck == parolaRev;
}


//* SECONDO ESERCIZIO
function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function pari(num) {
    return num % 2 == 0;
}