let existingAccount = false,
    deleteBtn = document.getElementById('deleteAcc');

checkAccount();

function checkAccount() {
    console.log(localStorage);
    if (localStorage.email == null) {
        location.href = '/index.html';
    } else {
        existingAccount = true;
    }
}

deleteBtn.addEventListener('click', function(e) {
    if (existingAccount == true) {
        localStorage.clear();
    }
})