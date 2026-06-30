"use strict";
// An abstract class is a class that cannot be instantiated directly. It is used as a base class for other classes and can contain both abstract methods (without implementation) and concrete methods (with implementation).
// Without the abstract class
// abstract class Animal{
//     eat(){
//       console.log("Animal is Eating");
//     }
// }
// class Dog22 extends Animal{}
// const dog45 = new Dog22();
// dog45.eat()
// With abstract class
// abstract class Animal2{
//      abstract makeSound(): void;
// }
// class Dog24 extends Animal2{
//    makeSound2(){
//        console.log("Woof Woof");
//    }
// }
// const dog22 = new Dog24();
// dog22.makeSound2();
// Abstract class with constructor
// abstract class Emp4{
//     constructor(
//         public name:string
//     ){}
//     abstract calCuSalary():number
// }
// class Dev2 extends Emp4{
//     calCuSalary(): number {
//       return 50000;
//     }
// }
// const dev = new Dev2("Alex");
// console.log(dev.calCuSalary());
