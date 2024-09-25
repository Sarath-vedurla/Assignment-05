const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// Handle overlay transition
signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

// Register form validation
function validateRegister() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('registerPassword').value.trim();
    const dob = document.getElementById('dob').value;
    const registerError = document.getElementById('registerError');

    if (name === '' || email === '' || password === '' || dob === '') {
        registerError.textContent = 'Please fill in all fields.';
        return false;
    }
    registerError.textContent = ''; // Clear error message if fields are filled
    return true;
}  