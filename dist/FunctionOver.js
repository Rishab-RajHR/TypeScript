"use strict";
// Function Overloading
// function add6(
//     a:number,
//     b:number
// ): number;
// function add6(
//     a:String,
//     b:string
// ):string
function add6(a, b) {
    return a + b;
}
console.log(add6(10, 30));
console.log(add6('Hello', 'World'));
// Overloading Signature
// function show(
//    value: string
// ):void
// function show(
//    value: number
// ):void
// Real world examples
// function search(
//     id:number
// ):string
// function search(
//     id: string
// ):string
function search(value) {
    if (typeof value === "number") {
        return `Search by id: ${value}`;
    }
    else {
        return `Search by Name: ${value}`;
    }
}
console.log(search(101));
console.log(search("Mohit"));
