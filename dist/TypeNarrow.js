"use strict";
// let value3: string | number = "Mohit"
// value = "Alex";
// value = 100;
// console.log(value3.toUpperCase());
// if (typeof value3 === "string"){
//     console.log(value3.toUpperCase());
// } else {
//     console.log(value3);
// }
function printVal(value) {
    if (typeof value === "string") {
        console.log(value.toUpperCase());
    }
    else {
        console.log(value.toFixed(2));
    }
}
printVal("Hello");
printVal(123);
function getInfo2(person) {
    if ("permission" in person) {
        console.log("Admin User");
    }
    else {
        console.log("Normal User");
    }
}
getInfo2({
    name: 'Alex',
    permission: ["create", "delete"]
});
getInfo2({
    name: "Rohit",
    email: "rohi12@gmail.com"
});
// Through Instance of a class TypeNarrowing
class Dog {
    bark() {
        console.log("Dog is barking");
    }
}
class Cat {
    meow() {
        console.log("Cat is meowing");
    }
}
function makesound(animal) {
    if (animal instanceof Dog) {
        animal.bark();
    }
    else {
        animal.meow();
    }
}
makesound(new Dog());
makesound(new Cat());
