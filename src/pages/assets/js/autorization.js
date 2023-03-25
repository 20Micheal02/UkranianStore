const loginInput = document.getElementById("login");
const passwordInput = document.getElementById("password");
const formButton = document.querySelector(".button-autorization");

formButton.addEventListener("click", (event) => {
  // Остановить отправку формы по умолчанию
  event.preventDefault();

  // Сбросить индикацию ошибок
  resetErrors();

  // Проверить валидность полей
  if (loginInput.checkValidity() && passwordInput.checkValidity() && isLoginValid() && isPasswordValid()) {
    // Если поля валидны, выполнить логин
    performLogin(loginInput.value, passwordInput.value);
  } else {
    // Если поля не валидны, отобразить сообщения об ошибках
    loginInput.classList.add("invalid");
    passwordInput.classList.add("invalid");
    if (!loginInput.checkValidity()) {
      showErrorMessage(loginInput, "Поле Логин обязательно для заполнения");
    } else if (!isLoginValid()) {
      showErrorMessage(loginInput, "Поле Логин должно содержать только буквы и цифры");
    }
    if (!passwordInput.checkValidity()) {
      showErrorMessage(passwordInput, "Поле Пароль обязательно для заполнения");
    } else if (!isPasswordValid()) {
      showErrorMessage(passwordInput, "Поле Пароль должно содержать как минимум 8 символов, одну заглавную букву, одну строчную букву и одну цифру");
    }
  }
});

function isLoginValid() {
  const loginRegex = /^[a-zA-Z0-9]+$/;
  return loginRegex.test(loginInput.value);
}

function isPasswordValid() {
  const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return passwordRegex.test(passwordInput.value);
}

function performLogin(login, password, email) {
    // Здесь можно выполнить логин
}
  

function resetErrors() {
  loginInput.classList.remove("invalid");
  passwordInput.classList.remove("invalid");
  const errorMessages = document.querySelectorAll(".error-message");
  errorMessages.forEach((errorMessage) => {
    errorMessage.textContent = "";
  });
}

function showErrorMessage(input, message) {
  const errorMessage = input.parentElement.querySelector(".error-message");
  errorMessage.textContent = message;
}
