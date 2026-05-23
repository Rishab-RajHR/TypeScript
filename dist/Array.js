"use strict";
// Through JavaScript
// let number = [10,20,30];
// console.log(number);
// console.log(number[0]);
// Through TypeScript => Type[]
let marks2 = [90, 80, 70];
console.log(marks2);
// Array<Type>
let user = [
    "Mohit",
    "Alex"
];
console.log(user);
// Array with different data type => number, string, boolean
let prices = [100, 200, 300];
// prices.push("Harman") => cannot push string to number
// prices.push(111) => Yes it is easily pushed no error
let cities = ["Delhi", "Mumbai"];
let statusCode = [true, false, true];
//  Common Array Method => Push() / Pop()
let fruits = ["Apple"];
fruits.push("Mango");
fruits.pop();
console.log(fruits);
console.log(fruits[0]);
console.log(fruits.length);
// MultiType Array  => Union Array combination of different data type
let data5 = [
    "Mohit",
    25,
    "Delhi"
];
data5.push(22);
