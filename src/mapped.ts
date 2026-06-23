// type User5 = {
//    name: string;
//    age: number
// }

// type UserOptional3 = {
//     name?:string;
//     age?:number;
// }



// Typed mapped

// type User5 = {
//    name : string;
//    age: number;
// }

// type OptionalUser = {
//    [key in keyof User5]?: User5[key]
// }

// const user:OptionalUser = {
//     name : "Alex";
// }




// For readonly 

// type User5 = {
//     name: string;
//     age: number;
// }

// type ReadonlyUser = {
//     readonly [key in keyof User5] : User5[key]
// }


// const user: ReadonlyUser = {
//    name: "Alex",
//    age: 30
// }
// user.name = "Tovino";    // We can't change the readonly property value




// For changing the value type

type User5 = {
  name: string;
  age: number;
}

type BooleanUser = {
    [key in keyof User5] : boolean
}

const userStatus: BooleanUser = {
    name: true,
    age: false
}

console.log(userStatus.name);