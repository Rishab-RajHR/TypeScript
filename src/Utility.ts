// Partial Utility Type

type User6 = {
    id: number,
    name: string,
    email: string,
    age: number
}

type UpdatedUser = Partial<User>

const user5:UpdatedUser = {
     name:"Mohit"
}
console.log(user5);


// Pick type

type User0 = {
    id: number,
    name: string,
    email: string,
    age: number
}
type UserBasicInfo = Pick<
     User0,
     "name"|"email"
     >;

const user0:UserBasicInfo={
     name:"Mohit",
     email:"test@gmail.com"
}
console.log(user0);

// type PublicUser = Omit<
//       User0,
//       "password">;

// const user6:PublicUser={
//      id:1,
//      name:"Alex",
//      email:"alex12@gmail.com"
// }
// console.log(user6);