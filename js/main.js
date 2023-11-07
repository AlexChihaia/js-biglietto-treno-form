'use strict';



const priceElement = document.getElementById('price')

//1) Scrivere un programma che chieda all’utente:

//- Prompt con il numero di chilometri da percorrere 

const tripLenght = Number(prompt('Inserisci km da percorrere'))


//- Prompt con l'età del passeggero
const passengerAge = Number(prompt('Inserisci la tua età'))

//2) Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
//- definire il prezzo del biglietto in base ai km con un(0.21 € al km)
//- chilometri da percorrere * prezzo(0.21 €)

const ticketPrice = (tripLenght * 0.21)

const kidsDiscount = 20
const elderDiscount = 40



if (!isNaN(tripLenght) && !isNaN(passengerAge)) {
    console.log('km :' + 'sono un numero :' + tripLenght);
}
else {
    console.log('km :' + 'non sono un numero :' + tripLenght);
}





//3) - va applicato uno sconto del 20 % per i minorenni
//   - va applicato uno sconto del 40 % per gli over 65.

const kidsPrice = (ticketPrice - (ticketPrice / 100 * kidsDiscount));

const kidsRounded = Math.round((kidsPrice + Number.EPSILON) * 100) / 100;

const elderPrice = (ticketPrice - (ticketPrice / 100 * elderDiscount));

const elderRounded = Math.round((elderPrice + Number.EPSILON) * 100) / 100;



if (passengerAge < 18) {
    console.log('Il prezzo del biglietto è :' + '' + kidsRounded + '' + '€');
    priceElement.innerHTML = ('Il prezzo del biglietto è :' + '' + kidsRounded + '' + '€');
}
else if (passengerAge > 64) {
    console.log('Il prezzo del biglietto è :' + '' + elderRounded + '' + '€');
    priceElement.innerHTML = ('Il prezzo del biglietto è :' + '' + elderRounded + '' + '€');
}
else {
    console.log('Il prezzo del biglietto è :' + '' + ticketPrice + '' + '€');
    priceElement.innerHTML = ('Il prezzo del biglietto è :' + '' + ticketPrice + '' + '€');
}