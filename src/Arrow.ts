// => 

// const greet2 = (name:string) => {
//     console.log("Hello", name);
// }
// greet2("Alex");


// const add3 = (
//     a:number,
//     b:number
// ): number =>{
//    return a+b;
// }
// console.log(add3(10,20));



// Short syntax for arrow 
const square8 = (num: number)=> num*num;
console.log(square8(10));


// Example 2
let nums = [1,2,3];

// Map Method
let double = nums.map(
     num => num*2
)
// Filter Method
// let double = nums.filter(
//      num => num>2
// )
console.log(double);