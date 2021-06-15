let existingAccount = false,
    password = document.getElementById('newPass'),
    submit = document.getElementById('confirm');

checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.email == null) {
        location.href = '/index.html';
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