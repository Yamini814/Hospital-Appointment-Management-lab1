const form = document.getElementById("registrationForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    const message = document.getElementById("formMessage");

    message.textContent =
        "Thank you, " + name + "! Registration completed successfully.";

    form.reset();

});