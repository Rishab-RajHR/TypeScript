"use strict";
// Static method belongs to the class itself, not to instances (objects) of the class. You can call a static method directly using the class name without creating an object.
// class MathUtils{
//    static appName = "Calculator"
// }
// console.log(MathUtils.appName);
// Static properties cannot be accessed with object
// class Company{
//    static companyName = "Alex Pandian"
// }
// const company = new Company();
// console.log(company);
// class MathUtils2 {
//     static add(
//        a:number,
//        b:number
//     ){
//         return a+b
//     }
// }
// console.log(MathUtils2.add(10,5));
// Static vs Instance members
class User8 {
    static appName = "Alex Pandian";
    name;
    constructor(name) {
        this.name = name;
    }
}
const user6 = new User8("Alex");
console.log(user6);
console.log(User8.appName);
