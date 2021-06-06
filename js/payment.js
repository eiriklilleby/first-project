const form = document.querySelector(".formContainer");
const address = document.querySelector("#address");
const addressError = document.querySelector("#addressError");
const city = document.querySelector("#city");
const cityError = document.querySelector("#cityError");
const zip = document.querySelector("#zip");
const zipError = document.querySelector("#zipError");
const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
const card = document.querySelector("#card");
const cardError = document.querySelector("#cardError");
const date = document.querySelector("#date");
const dateError = document.querySelector("#dateError");
const cvv = document.querySelector("#cvv");
const cvvError = document.querySelector("#cvvError");

function validateForm(event) {
  event.preventDefault();

  if (checkLength(address.value, 4) === true) {
    addressError.style.display = "none";
  } else {
    addressError.style.display = "block";
  }

  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
  }
  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
  } else {
    zipError.style.display = "block";
  }
  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
  }
  if (checkLength(card.value, 15) === true) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
  }
  if (checkLength(date.value, 4) === true) {
    dateError.style.display = "none";
  } else {
    dateError.style.display = "block";
  }
  if (checkLength(cvv.value, 2) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
  }
  if (
    checkLength(address.value, 4) &&
    checkLength(city.value, 2) &&
    checkLength(zip.value, 3) &&
    checkLength(name.value, 0) &&
    checkLength(card.value, 15) &&
    checkLength(date.value, 4) &&
    checkLength(cvv.value, 2)
  ) {
    window.location.pathname = "checkoutsucess.html";
  }
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
