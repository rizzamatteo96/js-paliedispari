//TODO Palidroma Chiedere all’utente di inserire una parola. Creare una funzione per capire se la parola inserita è palindroma

//* Chiedere all'utente la parola
var parola = prompt('Inserisci una parola');

if(palindroma(parola)){
    document.getElementById('risultatoParola').innerHTML = 'La parola inserita è palindroma';
} else {
    document.getElementById('risultatoParola').innerHTML = 'La parola inserita non è palindroma';
}



















//! ---------------SEZIONE PER LE FUNZIONI------------------
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
