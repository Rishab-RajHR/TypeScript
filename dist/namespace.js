"use strict";
// namespace App{
//     export function greet(){
//       console.log("Welcome to Mohit");
//     }
// }
// App.greet()
// namespace User{
//     export const company = "Alex Pandian";
//     export function login(){
//       console.log("User Logged In");
//     }
//     export class Emp{
//        constructor(
//            public name:string
//        ){}
//        show(){
//          console.log(this.name);
//        }
//     }
// }
// console.log(User.company);
// User.login();
// const emp = new User.Emp("Tovino")
// emp.show()
// Nested namespace
var Company;
(function (Company) {
    let HR;
    (function (HR) {
        function hire() {
            console.log("Hiring Emp");
        }
        HR.hire = hire;
    })(HR = Company.HR || (Company.HR = {}));
})(Company || (Company = {}));
Company.HR.hire();
