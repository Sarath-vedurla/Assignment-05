const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');
const goToRegister = document.getElementById('goToRegister');

// Handle overlay transition
signUpButton.addEventListener('click', () => container.classList.add('right-panel-active'));
signInButton.addEventListener('click', () => container.classList.remove('right-panel-active'));

goToRegister.addEventListener('click', () => container.classList.add('right-panel-active'));

// Login form validation
async function fetchUserData() {
    const apiUrl = 'https://script.google.com/macros/s/AKfycbzUIweH_0U2iBE_fwEiOFECfj_VWQmDVfgPiR3XGVSc0zpOuxE0EIIzO5kg4H-bIHI4/exec';
   
    try {
        const response = await fetch(apiUrl);
       
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data; // Assume data is an array of user objects
    } catch (error) {
        console.error('Error fetching data:', error);
        return [];
    }
}
async function handleLogin() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorElement = document.getElementById('loginError');

    // Clear previous error message
    errorElement.textContent = "";

    // Simple validation
    if (username === "" || password === "") {
        errorElement.textContent = "Please fill in all fields.";
        return;
    }

    const users = await fetchUserData();

    // Check if username and password match any user
    const userExists = users.some(user => user.username === username && user.password === password);

    if (userExists) {
        // Redirect to the index page if validation is successful
        window.location.href = "dash.html"; // Change this to your actual index page path
    } else {
        errorElement.textContent = "Invalid username or password.";
    }
}

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
    registerError.textContent = ''; 
    window.location.href = "dash.html";// Clear error message if fields are filled
    // return true;
}