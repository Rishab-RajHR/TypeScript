"use strict";
// function add(a:number,b:number){
//     return a-b;
// }
// console.log(add(10,20));
function call(price, quantity) {
    console.log(price);
    console.log(quantity);
    const result = price * quantity;
    return result;
}
console.log(call(500, 2));
