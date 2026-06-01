// parameter ?: type

function greet(
   name:string
){
    console.log(name);
}
greet("Alex");


// With the help of optional parameter we can make the parameter optional

function greetNumber8(
   name ?: string
){
    console.log(name);
}
greetNumber8("Tovino");
greetNumber8();



// Default parameter

function welcome(
    username:string = "Guest"
){
    console.log(`Hello ${username}`);
}
welcome();
welcome("George");



// Combining optional and default parameter

function welcome4(
    country : string,
    age ?: number,
    username : string = "Guest"
){
    console.log(`Hello ${username}`);
    console.log(`Hello ${age}`);
    console.log(`Hello ${country}`);
}
// welcome4("India");
// welcome4("India", 25);
welcome4("India", 25, "Basil");
