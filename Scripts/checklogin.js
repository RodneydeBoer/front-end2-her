let existingAccount = false,
    deleteBtn = document.getElementById('deleteAcc');

checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.email == null) {
        location.href = 'https://rodneydeboer.github.io/front-end2-her/';
    } else {
        existingAccount = true;
    }
}

deleteBtn.addEventListener('click', function(e) {
    e.preventDefault()
    if (existingAccount == true) {
        localStorage.clear();
    }
})