"use strict";
//   API Calling
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// interface User27{
//    id:number;
//    name:string;
//    email:string;
// }
// async function getUser(): Promise<User27[]>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");
//     const users56: User27[] = await res.json();
//     console.log(users56);
//     users56.forEach((user2)=>{
//        console.log(user2.name);
//     })
// }
// getUser();
// Error Handling 
// async function getUser() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");
//       const users = await res.json();
//       console.log(users)
//     } catch (error) {
//        console.log("Something went wrong");
//     }
// }
const axios_1 = __importDefault(require("axios"));
async function getProduct() {
    const res = await axios_1.default.get("https://fakestoreapi.com/products");
    console.log(res.data);
}
getProduct();
