"use strict";
const inputField = document.getElementById("username");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(inputField.value);
});
