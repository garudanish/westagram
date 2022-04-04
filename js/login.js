const loginInputs = document.querySelector(".login-inputs");
const idInput = document.querySelector(".input-id");
const pwInput = document.querySelector(".input-pw");
const loginBtn = document.querySelector(".login-button");

loginInputs.addEventListener("keyup", () => {
  loginBtn.disabled =
    idInput.value.length >= 1 && pwInput.value.length >= 1 ? false : true;
});

loginBtn.addEventListener("click", () => {
  window.location.href = "./main.html";
});
