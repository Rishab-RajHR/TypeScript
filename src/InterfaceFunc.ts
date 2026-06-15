// Example 1

interface MultiplyFun {
   (x:number, y:number): number;
}
let multiply: MultiplyFun = (a,b) =>{
    return a*b;
}
console.log(multiply(5,4));



// Example 2
interface Greeting {
  (
      userName:string
  ):string
}
let greetUser: Greeting = (userName) =>  {
   return `Hello ${userName}`;
};
console.log(greetUser("Tovino"));




// Reusable Function Contracts

interface Calculator {
   (
      a:number,
      b:number
   ):number
}

let add1:Calculator = (x,y)=> x+y;
let sub:Calculator = (x,y)=> x-y;
let mul2:Calculator = (x,y)=> x*y;

console.log(add1(10,5));
console.log(sub(10,5));
console.log(mul2(10,5));