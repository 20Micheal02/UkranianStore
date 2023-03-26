const firstNameInput = document.getElementById("fname");
const lastNameInput = document.getElementById("lname");

const submitButton = document.querySelector(".button-autorization");
submitButton.addEventListener("click", validateForm);

function validateForm(event) {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();

  const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄ']+( [a-zA-Zа-яА-ЯіІїЇєЄ']+)*$/;

  resetErrors();

  if (!nameRegex.test(firstName)) {
    showError(firstNameInput, "Ім'я повинно містити тільки літери");
  } else if (!nameRegex.test(lastName)) {
    showError(lastNameInput, "Прізвище повинно містити тільки літери");
  } else {
    submitForm();
  }
}

function showError(input, message) {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = message;
  input.classList.add("invalid");
}

function resetErrors() {
  firstNameInput.classList.remove("invalid");
  lastNameInput.classList.remove("invalid");
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
}

function submitForm() {
  document.querySelector("form").submit();
}