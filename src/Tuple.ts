//  Fix number of value , fix number of type
// [string,number]=["Alex",25]

// Tuple

// let user5 : [string,number]=["Alex",25]
// console.log(user5);

let number4: number[]=[1,2,3,4,5]; // Array
let employees: [string,number,boolean] = ["Alex",26000,true] // Tuple
console.log(employees[0]);

// Destructuring the Tuple

let [username8,salary7,isLogin5] = employees;

console.log(username8);
console.log(salary7);
console.log(isLogin5);