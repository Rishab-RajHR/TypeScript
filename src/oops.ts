// class User22{
//     name="Alex"
// }
// const user8 = new User22();
// console.log(user8);


// class User24{
//    name:string;
//    age:number
// }
// const user6 = new User24();
// user6.name = "Alex";
// user6.age = 34;

// console.log(user6)



// Example with the constructor

// class User23{
//    name:string;
//    age:number;

//    constructor (
//       name: string,
//       age: number
//    ){
//        this.name = name;
//        this.age = age;
//    }
// }

// const user44 = new User23(
//     "Basil",
//     30
// )
// const user43 = new User23(
//     "George",
//     35
// )
// console.log(user44);
// console.log(user43);




// Short method for constructor

class User45 {
    constructor(
        public name:string,
        public age:number
    ){}
}

const user33 = new User45(
    "Alex",
     30
)
console.log(user33);