const registrationForm = document.getElementById("registrationForm");
const firstNameInput = document.getElementById("firstName");
const lastNameInput = document.getElementById("lastName");
const usernameInput = document.getElementById("username");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const dobInput = document.getElementById("dob");

registrationForm.addEventListener("submit", function (e) {
    let valid = true;

    if (firstNameInput.value.trim() === "") {
        valid = false;
        document.getElementById("firstNameError").textContent = "First Name is required.";
    } else {
        document.getElementById("firstNameError").textContent = "";
    }

    // Last Name validation
    if (lastNameInput.value.trim() === "") {
        valid = false;
        document.getElementById("lastNameError").textContent = "Last Name is required.";
    } else {
        document.getElementById("lastNameError").textContent = "";
    }

    // Username validation
    if (usernameInput.value.trim() === "") {
        valid = false;
        document.getElementById("usernameError").textContent = "Username is required.";
    } else {
        document.getElementById("usernameError").textContent = "";
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        valid = false;
        document.getElementById("emailError").textContent = "Invalid email address.";
    } else {
        document.getElementById("emailError").textContent = "";
    }

    // Password validation
    if (passwordInput.value.length < 8) {
        valid = false;
        document.getElementById("passwordError").textContent = "Password must be at least 8 characters long.";
    } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Date of Birth validation
    if (!dobInput.value) {
        valid = false;
        document.getElementById("dobError").textContent = "Date of Birth is required.";
    } else {
        document.getElementById("dobError").textContent = "";
    }

    if (!valid) {
        e.preventDefault(); 
    }
});
