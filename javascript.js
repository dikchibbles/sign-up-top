const inputs = document.querySelectorAll('input')

const patterns = {
    firstName: /^[a-zA-Z]+$/,
    lastName: /^[a-zA-Z]+$/,
    email: /^([\w-]{1,50})@([\w-]{1,50})\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
    phone_num: /^[0-9]{11}$/,
    password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,25}$/,
    confirm_password: /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,25}$/,
}

function validate(field, regex) {
    if(regex.test(field.value)) {
        if(field.name === 'confirm_password' || field.name === 'password') {
            check();
        } else {
            field.className = 'valid';
        }
    } else {
        field.className = 'invalid';
    }
}

function check() {
    let password1 = document.getElementById('password');
    let password2 = document.getElementById('confirm-password');
    if(password1.value === password2.value) {
        password1.className = 'valid';
        password2.className = 'valid';
    } else {
        password1.className = 'invalid';
        password2.className = 'invalid';
    }
}

inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
        if (e.target.name === 'confirm_password') {
            check();
        } else {
            validate(e.target, patterns[e.target.name]);
        }
    });
})
