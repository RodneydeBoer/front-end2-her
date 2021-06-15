let form = document.querySelector('form'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    submit = document.getElementById('loginBtn'),
    notification = document.getElementById('notification'),
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
        submit.classList.add('false');
    }
}

// Function to check the validation at each keydown event, so it auto refreshes
form.addEventListener('keydown', function() {
    validateForm();
    if (fieldvalidate == true) {
        submit.disabled = false
        submit.classList.replace('false', 'true');
    }
});

// This function checks the input value with stored data in localstorage to perform a login action
function check() {
    let storedEmail = localStorage.email;
    let storedPw = localStorage.pw;

    if (existingAccount == true) {
        notification.classList.replace('none', 'block');
        if (email.value == storedEmail && password.value == storedPw) {
            location.href = 'Pages/readytostart.html';
        } else if (email.value !== storedEmail && password.value == storedPw) {
            email.classList.add('wronginput');
            notification.classList.add('error');
            notification.innerHTML = "Email not recognized";
        } else if (email.value == storedEmail && password.value !== storedPw) {
            password.classList.add('wronginput');
            notification.classList.add('error');
            notification.innerHTML = "Wrong password";
        } else {
            email.classList.add('wronginput');
            password.classList.add('wronginput');
            notification.classList.add('error');
            notification.innerHTML = "Account not found. Please create one";
        }

    } else {
        notification.classList.add('error');
        notification.classList.replace('none', 'block');
        notification.innerHTML = "No existing account, please create one";
        location.href = 'https://rodneydeboer.github.io/front-end2-her/';
    }
};