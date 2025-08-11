document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form");
  const userName = document.getElementById("fullname");
  const email = document.getElementById("email");
  const phone = document.getElementById("phone");
  const petName = document.getElementById("pet-name");
  const messageBox = document.getElementById("message");
  const date = document.getElementById("preferred-contact");
  const image = document.getElementById("attachment");
  const checkbox = document.getElementById("consentCheckbox");

  const errorConsent = document.getElementById("consent-error");
  const errorName = document.getElementById("error-fullname");
  const errorEmail = document.getElementById("error-email");
  const errorPet = document.getElementById("error-pet-name");
  const errorMessageBox = document.getElementById("error-message-box");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("Form submitted");

    let hasError = false;

    errorConsent.textContent = "";
    errorName.textContent = "";
    errorEmail.textContent = "";
    errorPet.textContent = "";
    errorMessageBox.textContent = "";

    // validate name
    if (userName.value.trim() === "") {
      errorName.textContent = "Full name is required";
      console.log("Error message full name required");

      hasError = true;
    }

    // validate email

    if (email.value.trim() === "") {
      errorEmail.textContent = "Email is required";
      hasError = true;
    } else if (!/\S+@\S+\.\S+/.test(email.value)) {
      errorEmail.textContent = "Enter a valid email address";
      hasError = true;
    }

    // validate pet name

    if (petName.value.trim() === "") {
      errorPet.textContent = "Pet name is required";
      hasError = true;
    }

    // validate message box

    if (messageBox.value.trim() === "") {
      errorMessageBox.textContent = "Message / Question is required";
      hasError = true;
    }

    // validate checkbox

    if (!checkbox.checked) {
      errorConsent.textContent =
        "Please agree to be contacted before submitting";
      hasError = true;
    }

    if (hasError) return;

    form.reset();
  });
});
