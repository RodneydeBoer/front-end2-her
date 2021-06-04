let existingAccount = false;

checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.getItem("email") === null) {
        alert('Je moet eerst inloggen');
        location.href = '/index.html';
    } else {
        existingAccount = true;
    }
}