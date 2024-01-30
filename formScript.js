// formScript.js

document.addEventListener("DOMContentLoaded", function () {
    // Add event listener for form submission
    document.getElementById("submissionForm").addEventListener("submit", function (event) {
        event.preventDefault();

        // Get values from the form
        var name = document.getElementById("name").value;
        var email = document.getElementById("email").value;

        // Display the submitted values (you can customize this part)
        alert("Name: " + name + "\nEmail: " + email);
    });
});
