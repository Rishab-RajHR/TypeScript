// type functionName = {
//     (
//         parameter:type
//     ):Return Type;
// }


// type Multiple = {
//     (
//         x:number,
//         y:number
//     ): number;
// }

// let multiplyNumber : Multiple = (a,b)=>{
//     return a*b;
// }
// console.log(multiplyNumber(10,5));



// Through interface

// interface Multiple {
//     (
//         x:number,
//         y:number
//     ): number;
// }

// let multiplyNumber : Multiple = (a,b)=>{
//     return a*b;
// }
// console.log(multiplyNumber(10,5));



interface LoginFunction{
   (
      email:string,
      password: string
   ): boolean;
}

let login:LoginFunction = 
(email,password)=>{
   return true
}
console.log(login("alex12@gmail.com","Alex"));