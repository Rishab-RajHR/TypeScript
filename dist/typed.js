"use strict";
// const msgPromise: Promise<string> =
//     new Promise((resolve)=>{
//         setTimeout(()=>{
//            resolve("Welcome to MD")
//         },2000)
//     })
//     msgPromise.then((message)=>{
//         console.log(message);
//     })
// const agePromise: Promise<number> = 
//     new Promise((resolve)=>{
//         setTimeout(() => {
//            resolve(30)
//         }, 2000);
//     })
//     agePromise.then((message)=>{
//         console.log(message);
//     })
// Async await in Promise
// function getUser(): Promise<string>{
//     return new Promise((resolve)=>{
//       setTimeout(() => {
//          resolve("Alex")
//       }, 1000);
//     })
// }
// async function showUser(){
//      const user = await getUser();
//      console.log(user);
// }
// showUser()
// Promise with Generic Type (Interface)
// interface User98{
//    id: number;
//    name: string;
// }
// function getUser(): Promise<User98>{
//       return Promise.resolve({
//           id: 1,
//           name: "Tovino"
//       })
// }
// getUser().then((user)=>{
//     console.log(user.name);
// })
// Error Handling in Promise
function login2() {
    return new Promise((resolve, reject) => {
        const success = false;
        if (success) {
            resolve("Login Fine");
        }
        else {
            reject("Invalid Username");
        }
    });
}
login2().then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
});
