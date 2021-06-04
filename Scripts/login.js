let form = document.querySelector('form'),
    email = document.getElementById('email'),
    password = document.getElementById('wachtwoord'),
    submit = document.getElementById('inlogknop'),
    existingAccount = false,
    fieldvalidate = false;

// calls functions that need to be executed right away
checkAccount();
validateForm();

// function on submit button click that calls the login verification function and more
submit.addEventListener('click', function(e) {
    e.preventDefault()
    check();
    console.log(localStorage);
    checkAccount();
})

// Tests if there is an existing account in Localstorage
function checkAccount() {
    console.log(localStorage);
    if (localStorage.getItem("email") === null) {

    } else {
        existingAccount = true;
    }
}

// Validates data in form. The submit button is disabled untill there is some value in the inputs
function validateForm() {
    if (email.value && password.value) {
        fieldvalidate = true;
    } else {
        submit.disabled = true
        submit.style.opacity = "0.5";
        submit.style.cursor = "not-allowed";
    }
}

// Function to check the validation at each keydown event, so it auto refreshes
form.addEventListener('keydown', function() {
    validateForm();
    if (fieldvalidate == true) {
        submit.disabled = false
        submit.style.opacity = "1";
        submit.style.cursor = "pointer";
    }
});

// This function checks the input value with stored data in localstorage to perform a login action
function check() {
    let storedEmail = localStorage.getItem('email');
    let storedPw = localStorage.getItem('pw');

    if (existingAccount == true) {
        if (email.value == storedEmail && password.value == storedPw) {
            alert('Gelukt! Je bent nu ingelogd');
        } else {
            alert('Verkeerde gegevens');
        }
    } else {
        alert('Er bestaat nog geen account. Registreer je account nu');
        location.href = '/index.html';
    }
}