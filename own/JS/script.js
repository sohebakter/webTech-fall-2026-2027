function collect_data() {
    let isValidName = validateName();
    let isValidId = validateId();
    let isValidGender = validateGender();
    let isValidAge = validateAge();
    let isValidCgpa = validateCgpa();
    let isValidNumber = validateNumber();
    let isValidEmail = validateEmail();
    if (isValidName && isValidId && isValidGender && isValidAge && isValidCgpa && isValidNumber && isValidEmail) {
        alert("Form Submitted Successfully!");
        return true;
    }

    return false;
}

function validateName() {
    let name = document.getElementById("Name").value.trim();
    let error = document.getElementById("NameError");

    if (name === "") {
        error.innerHTML = "* Please enter your name";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateId() {
    let id = document.getElementById("id").value.trim();
    let error = document.getElementById("IdError");

    if (id === "") {
        error.innerHTML = "* Please enter your ID";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateGender() {
    let radios = document.getElementsByName("Gender");
    let error = document.getElementById("GenderError");
    let isChecked = false;

    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        error.innerHTML = "* Please select your gender";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateAge() {
    let age = document.getElementById("age").value.trim();
    let error = document.getElementById("AgeError");

    if (age === "") {
        error.innerHTML = "* Please enter your age";
        return false;
    } else if (age < 1 || age > 100) {
        error.innerHTML = "* Please enter a valid age";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateCgpa() {
    let cgpa = document.getElementById("CGPA").value.trim();
    let error = document.getElementById("CGPAError");

    if (cgpa === "") {
        error.innerHTML = "* Please enter your CGPA";
        return false;
    } else if (cgpa < 0 || cgpa > 4.00) {
        error.innerHTML = "* CGPA must be between 0.00 and 4.00";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateNumber() {
    let number = document.getElementById("number").value.trim();
    let error = document.getElementById("NumberError");
    let phonePattern = /^01[3-9]\d{8}$/; 

    if (number === "") {
        error.innerHTML = "* Please enter your phone number";
        return false;
    } else if (!phonePattern.test(number)) {
        error.innerHTML = "* Please enter a valid phone number ( 01XXXXXXXXX)";
        return false;
    } else {
        error.innerHTML = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("Email").value.trim();
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
        alert("Please enter your email"); 
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email format");
        return false;
    } else {
        return true;
    }
}