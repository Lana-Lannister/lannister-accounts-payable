const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

//succes or error messages

function showError(input, message) {
    const formControl = input.parentElement;
    formControl.className = 'form-control error';
    const small = formControl.querySelector('small');
    small.innerText = message; 
}

function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

//stack overflow function

function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

//events

form.addEventListener('submit', function (e) {
    e.preventDefault();

    if (username.value === '') {
        showError(username, 'Obrigatório preencher sua casa');
    }
    else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, 'Obrigatório preencher o email');
    }
    else if(!isValidEmail(email.value)) {
        showError(email, 'Não deu boa, tente de novo');
    }
    else {
        showSuccess(email);
    }

    if (password.value === '') {
        showError(password, 'Obrigatório preencher sua chave');
    }
    else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, 'Obrigatório preencher sua chave');
    }
    else {
        showSuccess(password2);
    }
});