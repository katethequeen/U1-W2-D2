/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(5 > 4);

/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

console.log(6 !== 5);

/* ESERCIZIO 3
Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log("25 è divisibile per 5? " + (25 % 5) ? true : false);

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let num1 = 7;
let num2 = 8;

console.log(num1 === 8 || num2 === 8 || num1 + num2 === 8 || num1 - num2 === 8 ? "There's 8" : "Not 8");

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const totalShoppingCart = parseInt(prompt("Insert your total.."));
let spedizioneGratuita = true;

if (totalShoppingCart > 50) {
  alert("Il totale è: " + totalShoppingCart + " e la spedizione è gratuita? " + spedizioneGratuita);
} else {
  spedizioneGratuita = 10;
  alert("Il totale è: " + (spedizioneGratuita + totalShoppingCart));
}

/* ESERCIZIO 6
Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

if (totalShoppingCart > 50) {
  alert("Il totale con lo sconto applicato per il Black Friday è: " + (totalShoppingCart * 20) / 100 + " e la spedizione è gratuita? " + spedizioneGratuita);
} else {
  spedizioneGratuita = 10;
  alert("Il totale con lo sconto applicato per il Black Friday è: " + (spedizioneGratuita + (totalShoppingCart * 20) / 100));
}

/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let a = 6;
let b = 2;
let c = 8;

if (a > b && a > c && b > c) {
  console.log("L'ordine dei valori è: " + a + " - " + b + " - " + c);
} else if (b > a && b > c && a > c) {
  console.log("L'ordine dei valori è: " + b + " - " + a + " - " + c);
} else if ()

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const valore = prompt("Inserisci un valore numerico o letterale e ti dirò che tipo è!");

if (valore === Number) {
  console.log("Il valore che hai inserito è un numero");
}
if (valore === String) {
  console.log("Il valore che hai inserito è una stringa");
}

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const userNumber = parseInt(prompt("Inserisci un numero e ti dirò se è pari o dispari"));

if (userNumber % 2 === 0) {
  console.log("Il numero è pari");
} else {
  console.log("Il numero è dispari");
}

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza. */
let val = 4;

if (val < 10) {
  console.log("Meno di 5");
} else if (val < 5) {
  console.log("Meno di 10");
} else {
  console.log("Uguale a 10 o maggiore");
}

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

const me = {
  name: "John",
  lastName: "Doe",
  skills: ["javascript", "html", "css"],
};

/* SCRIVI QUI LA TUA RISPOSTA */

let city = (me.city = "Toronto");
console.log(me);

/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.lastName;
console.log(me);

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/* SCRIVI QUI LA TUA RISPOSTA */
delete me.skills.pop();
console.log(me);

/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let emptyArr = [];
emptyArr.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
console.log(emptyArr);

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
emptyArr.splice(emptyArr.length - 1, 1, 100);
console.log(emptyArr);
