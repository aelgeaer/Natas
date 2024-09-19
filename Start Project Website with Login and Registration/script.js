const loginButton = document.querySelector('.login-link');
const registerButton = document.querySelector('.register-link');
const loginForm = document.querySelector('.login');
const registerForm = document.querySelector('.register');

loginButton.addEventListener('click', () => {
    loginForm.classList.add('visible');
    registerForm.classList.add('hidden');
});

registerButton.addEventListener('click', () => {
    loginForm.classList.add('hidden');
    registerForm.classList.add('visible');
});