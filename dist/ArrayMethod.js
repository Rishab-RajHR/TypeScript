"use strict";
// map , filter , reduce
// map
// let number: number[] = [1,2,4,5];
// let double = number.map(num => num*2)
// console.log(double)
// console.log(number)
// filter
// let number: number[] = [10,20,30,40];
// let result2 = number.filter(num => num > 20);
// console.log(result2);
// let user3 : string[] = ["Mohit","Alex","Tovino"];
// let filteruser = user3.filter(user3 => user3.startsWith("A"))
// console.log(filteruser);
// reduce => multiple value converted into single value
let prices3 = [100, 200, 300];
let total4 = prices3.reduce((sum2, prices3) => sum2 + prices3, 0);
console.log(total4);
