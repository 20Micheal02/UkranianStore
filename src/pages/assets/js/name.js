const fnameInput = document.getElementById("fname");
const lnameInput = document.getElementById("lname");

fnameInput.addEventListener("input", function () {
  if (fnameInput.validity.valueMissing) {
    fnameInput.setCustomValidity("Пожалуйста, введите ваше имя");
  } else if (/\d|\s|[~`!@#$%\^&*()_+={}\[\]|\\:;\"'<>,.?\/]/g.test(fnameInput.value)) {
    fnameInput.setCustomValidity("Имя не должно содержать цифры, специальные символы или пробелы");
  } else {
    fnameInput.setCustomValidity("");
  }
});

lnameInput.addEventListener("input", function () {
  if (lnameInput.validity.valueMissing) {
    lnameInput.setCustomValidity("Пожалуйста, введите вашу фамилию");
  } else if (/\d|\s|[~`!@#$%\^&*()_+={}\[\]|\\:;\"'<>,.?\/]/g.test(lnameInput.value)) {
    lnameInput.setCustomValidity("Фамилия не должна содержать цифры, специальные символы или пробелы");
  } else {
    lnameInput.setCustomValidity("");
  }
});