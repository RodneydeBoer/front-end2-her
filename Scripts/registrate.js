let fieldset = document.getElementsByTagName('fieldset'),
    form = document.querySelector('form'),
    firstName = document.getElementById('firstName'),
    preference = document.querySelector('input[name="preference"]:checked'),
    lastName = document.getElementById('lastName'),
    dateBirth = document.getElementById('dateOfBirth'),
    email = document.getElementById('email'),
    password = document.getElementById('password'),
    submit = document.getElementById('registrateBtn'),
    notification = document.getElementById('notification'),
    textvalidate = false,
    fieldvalidate = false;
const numbers = /[0-9]/;

// Hiding second fieldset for now
fieldset[1].classList.add('none');
fieldset[2].classList.add('none');
submit.classList.add('none');
notification.classList.add('none');

// automatic check for loggedin user
checkLogin();

// disabling submit and call store function on click
submit.addEventListener('click', function(e) {
    e.preventDefault()
    store();
    checkLogin();
    console.log(localStorage);
})

// checking if localstorage has data, and if it does it redirects back to login
function checkLogin() {
    console.log(localStorage);
    if (localStorage.email == null) {

    } else {
        fieldset[0].classList.add('none');
        notification.classList.add('error');
        notification.classList.replace('none', 'block');
        notification.innerHTML = "Je hebt al een account. <a href='/index.html '> Log hier in</a>";
    }
}

// Function to check if the input contains numbers
function verifyInput() {
    if (firstName.value.match(numbers) || lastName.value.match(numbers)) {
        notification.classList.add('error');
        notification.classList.replace('none', 'block');
        notification.innerHTML = "No other characters than A-Z at name";
        textvalidate = false;
    } else {
        textvalidate = true;
        notification.classList.replace('block', 'none');
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
        fieldset[1].classList.replace("none", "block");
        fieldset[2].classList.replace("none", "block");
        submit.classList.replace("none", "block");
    }
});

// Storing the user-data to local storage to create account in local storage (database mimic)
function store() {
    if (email.value.length == 0 && password.value.length == 0) {
        notification.classList.add('error');
        notification.classList.replace('none', 'block');
        notification.innerHTML = "Please add email + password";
    } else {
        localStorage.setItem('firstname', firstName.value);
        localStorage.setItem('lastname', lastName.value);
        localStorage.setItem('datebirth', dateBirth.value);
        localStorage.setItem('preference', preference.value);
        localStorage.setItem('email', email.value);
        localStorage.setItem('pw', password.value);
        location.href = 'https://rodneydeboer.github.io/front-end2-her/';
    }
}