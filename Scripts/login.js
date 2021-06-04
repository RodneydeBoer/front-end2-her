//checking
let form = document.querySelector('form'),
    email = document.getElementById('email'),
    password = document.getElementById('wachtwoord'),
    submit = document.getElementById('inlogknop'),
    existingAccount = false,
    fieldvalidate = false;

checkAccount();
validateForm();

submit.addEventListener('click', function(e) {
    e.preventDefault()
    check();
    console.log(localStorage);
    checkAccount();
})


function checkAccount() {
    console.log(localStorage);
    if (localStorage.getItem("email") === null) {

    } else {
        existingAccount = true;
    }
}

function validateForm() {
    if (email.value && password.value) {
        fieldvalidate = true;
    } else {
        submit.disabled = true
        submit.style.opacity = "0.5";
    }
}

form.addEventListener('keydown', function() {
    validateForm();
    if (fieldvalidate == true) {
        submit.disabled = false
        submit.style.opacity = "1";
    }
});

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