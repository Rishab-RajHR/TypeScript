"use strict";
// Partial Utility Type
const user5 = {
    name: "Mohit"
};
console.log(user5);
const user0 = {
    name: "Mohit",
    email: "test@gmail.com"
};
console.log(user0);
// type PublicUser = Omit<
//       User0,
//       "password">;
// const user6:PublicUser={
//      id:1,
//      name:"Alex",
//      email:"alex12@gmail.com"
// }
// console.log(user6);
