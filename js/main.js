'use strict';

const passengerName = document.getElementById('passengerNameInput');
const tripLenght = document.getElementById('kmNumberInput');
const passengerAgeRange = document.getElementById('ageRangeInput');
const show = document.getElementById('show');


const submitButton = document.getElementById('generate');
const resetButton = document.getElementById('cancel');

submitButton.addEventListener('click',
    function () {
        show.classList.remove('visually-hidden')

    }
)


resetButton.addEventListener('click',
    function () {

    }
)





