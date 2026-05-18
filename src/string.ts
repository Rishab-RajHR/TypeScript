let hello: string = "Naman";
console.log(hello);

// let firstName : string = "Alex"
// let lastName : string = 'Pandian'
// let courses : string = `TypeScript`
// console.log(firstName,lastName,courses);



let firstName : string = "Alex"
let lastName : string = 'Pandian'

// let fullName = firstName+" "+lastName
let fullName = `My Full name is ${firstName} ${lastName}`
console.log(fullName);


let userName: string = "Tovino"
let ages: number = 25;
let message = `My name is ${userName} and I am ${ages} year old`;
console.log(message);
console.log(message.length);


// Boolean

let isLoggedIns : boolean = true;

if(isLoggedIns){
    console.log("Welcome User")
}else{
    console.log("Please Login");
}