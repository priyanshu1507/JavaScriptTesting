function validateEmail() {
    var emailField = document.getElementById("email");
    var email = emailField.value;
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    var errorMessage = document.getElementById("email-error");

    if (!emailPattern.test(email)) {
        errorMessage.innerHTML = "Please Enter Valid Email Address";
        emailField.focus();

        // Set a timeout to clear the error message after 5 seconds (5000 milliseconds)
        setTimeout(function() {
            errorMessage.innerHTML = "";
        }, 5000);

        return false;
    } else {
        errorMessage.innerHTML = ""; // Clear the error message if email is valid.
    }

    return true;

    
}
