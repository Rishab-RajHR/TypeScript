"use strict";
// One class inherits the property of other class
// class Animal{
//      name:string;
//      constructor(name:string){
//         this.name = name
//      }
//      eat2(){
//          console.log(`${this.name} is eating`);
//      }
// }
// class Dog2 extends Animal{
//      bark(){
//         console.log("Woff Woff");
//      }
// }
// const dog2 = new Dog2("Tommy");
// dog2.eat2();
// dog2.bark();
// Constructor Inheritance
// class Animal{
//      constructor(
//         public name:string
//      ){}
// }
// class Dog3 extends Animal{
//     constructor(
//         name: string,
//         public breed: string
//     ){
//         super(name)
//     }
// }
// const dog3 = new Dog3(
//     "Tommy",
//     "Labrador"
// )
// console.log(dog3);
// Protected Method
class Emp4 {
    salary;
    constructor(salary) {
        this.salary = salary;
    }
}
class Dev extends Emp4 {
    showSalary() {
        console.log(this.salary);
    }
}
const dev2 = new Dev(60000);
dev2.showSalary();
