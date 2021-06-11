let existingAccount = false,
    voornaam = document.getElementById('voornaam');
checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.getItem("email") === null) {
        alert('Je moet eerst inloggen');
        location.href = '/index.html';
    } else {
        existingAccount = true;
        voornaam.innerHTML = localStorage.firstname;
    }
}