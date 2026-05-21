const inputField = document.getElementById("username") as HTMLInputElement;


const button = document.getElementById("btn") as HTMLInputElement;

button.addEventListener("click", ()=>{
    console.log(inputField.value);
    const value = inputField.value
    if(value.trim()==""){
        alert("Please Enter a name")
    } else {
        console.log(value);
    }
})