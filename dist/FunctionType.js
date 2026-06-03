"use strict";
// let add : (
//     a: number,
//     b: number
// ) => number
function greet8(username) {
    console.log("Hello", username);
}
greet8("Alex");
function add5(a, b) {
    console.log(a + b);
}
add5(10, 20);
// void doesn't return anything
// Function with multiple parameters
function multiply2(a, b) {
    return a * b;
}
console.log(multiply2(10, 20));
// Function Type Expression and return
let subtract;
subtract = (a, b) => {
    return a - b;
};
console.log(subtract(20, 5));
// Function type with callbacks
function processData(callback) {
    callback(100);
}
processData((num) => {
    console.log(num);
});
// Another example
function calculate(a, b, operator) {
    return operator(a, b);
}
let result45 = calculate(10, 20, (x, y) => x + y);
console.log(result45);
