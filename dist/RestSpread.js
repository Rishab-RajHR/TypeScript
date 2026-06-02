"use strict";
// ...
// Rest means collecting the values
// function addNumber5(...num:number[]){
//     console.log(num);
// }
// addNumber5(10,20,30,40);
// Rest Operator is used at last
function total3(...prices4) {
    return prices4.reduce((sum1, price1) => sum1 + price1, 0);
}
console.log(total3(100, 200, 300));
// Spread operator means to expand the value
// let num1 = [1,2,3];
// let num2 = [...num1];
// Shopping card merge , API 
let num1 = [1, 2, 3];
let num2 = [6, 7, 8];
let result3 = [...num1, ...num2];
console.log(result3);
// Rest Operator used on object
let user4 = {
    name: "Alex",
    age: 23
};
let updatedUser7 = {
    ...user4,
    // city: "Delhi"
    age: 25 // We can update the value also
};
console.log(updatedUser7);
