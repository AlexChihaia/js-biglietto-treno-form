'use strict';


/* dati form */

const passengerName = document.getElementById('passengerNameInput');
const tripLength = document.getElementById('kmNumberInput');
const passengerAgeRange = document.getElementById('ageRangeInput');



/* dati biglietto virtuale */
const nameDetail = document.getElementById('passengerName');
let type = document.getElementById('type');
const cabinNumber = document.getElementById('cabin');
const cpCode = document.getElementById('cp');
const finalPrice = document.getElementById('price');




/* variabile di display */
const show = document.querySelector('div.d-none');



/* button */

const submitButton = document.getElementById('generate');
const resetButton = document.getElementById('cancel');




/* prezzo e sconti */

const costoBigliettoKm = 0.21;
const scontoMinorennePercentuale = 20;
const scontoOverPercentuale = 40;



/* calcolo del biglietto */

submitButton.addEventListener('click',
    function () {
        let ticketPrice = costoBigliettoKm * Number(tripLength.value);




        if (passengerAgeRange.value === 'minorenne') {
            ticketPrice = ticketPrice - (ticketPrice * scontoMinorennePercentuale) / 100;
            type.innerText = 'Sconto 20%';

        }
        else if (passengerAgeRange.value === 'over') {
            ticketPrice = ticketPrice - (ticketPrice * scontoOverPercentuale) / 100;
            type.innerText = 'Sconto 40%';
        }
        else {
            type.innerText = 'Biglietto standard';
        }
        show.classList.remove('d-none');
        nameDetail.innerText = passengerName.value;
        cabinNumber.innerText = Math.floor(Math.random() * 12 + 1);
        cpCode.innerText = Math.floor(Math.random() * 9000) + 1000;
        finalPrice.innerText = ticketPrice.toFixed(2) + ' ' + ('€');

    }
);



/* reset del biglietto */

resetButton.addEventListener('click',
    function () {
        show.classList.add('d-none');

    }
)





