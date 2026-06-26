"use strict";
// To make reusable components
// function printString(value: string){
//     return value
// }
// function printNumber(value: number){
//     return value
// }
// function printValue<T>(value:T):T{
//     return value
// }
// console.log(printValue('Mohit'));
// console.log(printValue(100));
// console.log(printValue(true));
// function getData<T>(data:T):T{
//     return data;
// }
// let userName2 = getData<string>('Mohit')
// let age8 = getData<number>(30)
// console.log(userName2);
// console.log(age8);
// function getFirstElement2<T>(
//      arr:T[]
// ):T{
//    return arr[0]
// }
// console.log(getFirstElement2(
//   [
//      'React',
//      'Angular',
//      'NestJS'
//   ]
// ));
// Generic Interface
// interface ApiResponse<T>{
//     success: boolean,
//     data: T;
// }
// const response2 : ApiResponse<string> = {
//     success:true,
//     data: "User Found"
// }
// const response3 : ApiResponse<{
//      name:string;
//      age:number
// }>={
//     success:true,
//     data:{
//         name:"Alex",
//         age: 30
//     }
// }
// console.log(response2);
// console.log(response3);
// With the different datatype
// function printData<T>(data:T){
//    return data.length;
// }
// console.log(printData(true));
// Through extends keyword
// function getLength<
//     T extends {length:number}>(item:T){
//         return item.length
//     }
// console.log(getLength([1,2,3]));
// Through interface
// interface HasId{
//     id: number
// }
// function printId<
//    T extends HasId>(obj:T){
//       console.log(obj.id);
//    }
// printId({
//     id:101,
//     name:"Alex"
// })
