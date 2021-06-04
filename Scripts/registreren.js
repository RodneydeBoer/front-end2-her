let fieldset = document.getElementsByTagName('fieldset'),
    form = document.querySelector('form'),
    firstName = document.getElementById('voornaam'),
    preference = document.querySelector('input[name="voorkeur"]:checked'),
    lastName = document.getElementById('achternaam'),
    dateBirth = document.getElementById('gebDatum'),
    email = document.getElementById('email'),
    password = document.getElementById('wachtwoord'),
    submit = document.getElementById('submit'),
    textvalidate = false,
    fieldvalidate = false;
const numbers = /^[0-9]+$/;

// Hiding second fieldset for now
fieldset[1].style.display = "none";
fieldset[2].style.display = "none";
submit.style.display = "none";

// automatic check for loggedin user
checkLogin();

// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    store();
    console.log(localStorage);
    checkLogin();
})

function checkLogin() {
    console.log(localStorage);
    if (localStorage.getItem("email") === null) {

    } else {
        alert('Je hebt al een account. U wordt nu doorgestuurd');
        location.href = '/index.html';
    }
}

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

// Storing the user-data to local storage to create account in local storage (database mimic)
function store() {
    if (email.value.length == 0 && password.value.length == 0) {
        alert('Voer email + wachtwoord in');
    } else {
        localStorage.setItem('firstname', firstName.value);
        localStorage.setItem('lastname', lastName.value);
        localStorage.setItem('datebirth', dateBirth.value);
        localStorage.setItem('preference', preference.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', password.value);
        location.href = '/index.html';
        alert('Account aangemaakt. Log in en vind jouw vismaat');
    }
}