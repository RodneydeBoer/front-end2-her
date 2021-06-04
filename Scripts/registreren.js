let fieldset = document.getElementsByTagName('fieldset');
let form = document.querySelector('form');
let firstName = document.getElementById('voornaam');
let lastName = document.getElementsByName('voorkeur');
let preference = document.getElementById('achternaam');
let dateBirth = document.getElementById('gebDatum');
let submit = document.getElementById('submit');
let textvalidate = false;
let fieldvalidate = false;
const numbers = /^[0-9]+$/;

// Hiding second fieldset for now
fieldset[1].style.display = "none";
fieldset[2].style.display = "none";
submit.style.display = "none";

// Function to check if the input contains numbers
function verifyInput() {
    if (firstName.value.match(numbers) && lastName.value.match(numbers)) {
        alert('Geen cijfers gebruiken bij namen');
        textvalidate = false;
    } else {
        textvalidate = true;
    }
}

// VAlidation function to check if fieldset is complete
function validateFieldset1() {
    if (textvalidate == true && dateBirth.value) {
        fieldvalidate = true;
    } else {
        fieldvalidate = false;
    }
}

// Function to check the validation at each keydown event, so it auto refreshes
form.addEventListener('keydown', function() {
    verifyInput();
    validateFieldset1();

    if (fieldvalidate) {
        fieldset[1].style.display = "block";
        fieldset[2].style.display = "block";
        submit.style.display = "block";
    }
});