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
    return false;
  }

  if (checkLength(city.value, 2) === true) {
    cityError.style.display = "none";
  } else {
    cityError.style.display = "block";
    return false;
  }
  if (checkLength(zip.value, 3) === true) {
    zipError.style.display = "none";
  } else {
    zipError.style.display = "block";
    return false;
  }
  if (checkLength(name.value, 0) === true) {
    nameError.style.display = "none";
  } else {
    nameError.style.display = "block";
    return false;
  }
  if (checkLength(card.value, 15) === true) {
    cardError.style.display = "none";
  } else {
    cardError.style.display = "block";
    return false;
  }
  if (checkLength(date.value, 4) === true) {
    dateError.style.display = "none";
  } else {
    dateError.style.display = "block";
    return false;
  }
  if (checkLength(cvv.value, 2) === true) {
    cvvError.style.display = "none";
  } else {
    cvvError.style.display = "block";
    return false;
  }
  window.location.pathname = "checkoutsucess.html";
  return true;
}

form.addEventListener("submit", validateForm);

function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}
