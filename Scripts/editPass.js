let existingAccount = false,
    password = document.getElementById('newPass'),
    submit = document.getElementById('confirm');

checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.email == null) {
        location.href = 'https://rodneydeboer.github.io/front-end2-her/';
    } else {
        existingAccount = true;
    }
}

submit.addEventListener('click', function(e) {
    e.preventDefault()
    if (existingAccount == true) {
        localStorage.setItem('pw', password.value);
        location.href = 'readytostart.html';
    }
})