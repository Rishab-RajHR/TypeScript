"use strict";
// function Logger(target: Function){
//     console.log("Class Created");
//     console.log(target.name);
// }
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
// @Logger
// class User78{
//     constructor(){
//        console.log("User Const")
//     }
// }
// const user56 = new User78()
// Method Decorators
// function LogMethod(
//     target:any,
//     propertyKey: string,
//     description: PropertyDescriptor
// ){
//     console.log(`Method: ${propertyKey}`);
// }
// class User56{
//   @LogMethod
//   login(){
//      console.log("Login");
//   }
// }
// Property Decorators
// function LogProperty(
//    target:any,
//    propertyKey:string
// ){
//    console.log(`Property: ${propertyKey}`);
// }
// class User47{
//     @LogProperty
//     name = "Alex"
// }
// Parameter Decorator
function LogParameter(target, methdName, parameterIndex) {
    console.log(`Parameter Index: ${parameterIndex}`);
}
class User88 {
    login(username) { }
}
__decorate([
    __param(0, LogParameter)
], User88.prototype, "login", null);
