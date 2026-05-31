"use strict";
// function greet2(){
//     console.log("Welcome to TS");
// }
// greet2();
// With single parameter
// function greet3(username:string){
//     console.log("Welcome to TS",username);
// }
// greet3("Alex")  // This should be string only
// With two parameters
function add4(a, b) {
    console.log(a + b);
}
add4(10, 20);
// Function with return type
function add5(a, b) {
    return a + b;
}
let result6 = add5(10, 20);
console.log(result6);
// Type safety in Function
function test() {
    return 100;
}
let result4 = test();
console.log(result4);
// Optional and default Parameter
// Optional Parameter
function greetNumber3(username) {
    console.log(username);
}
greetNumber3("Alex");
// Default Parameter
function greetNumber6(username = "Guest") {
    console.log(username);
}
greetNumber6();
greetNumber6("George"); // If we pass the parameter the default will be overriden
// Arrow Function
const addNumber8 = (a, b) => {
    return a + b;
};
let result8 = addNumber8(15, 25);
console.log(result8);
// console.log(addNumber8(10,40));  => shorthand representation of data
// Square of the number
const square = (num) => num * num;
console.log(square(3));
