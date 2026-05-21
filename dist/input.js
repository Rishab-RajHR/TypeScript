"use strict";
const inputField = document.getElementById("username");
const button = document.getElementById("btn");
button.addEventListener("click", () => {
    console.log(inputField.value);
    const value = inputField.value;
    if (value.trim() == "") {
        alert("Please Enter a name");
    }
    else {
        console.log(value);
    }
});
