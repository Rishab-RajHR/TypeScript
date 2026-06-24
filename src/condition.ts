// type Result<T> = T extends string ? string : number;

// type CheckString<T> = 
//         T extends string ? "Yes" : "No"

// type Result1 = CheckString<string>
// type Result2 = CheckString<number>

// const result: Result1 = "Yes"
// console.log(result)



// type IsAdmin<T> = 
//      T extends "admin"? true : false

// type User1 = IsAdmin<"admin">
// type User2 = IsAdmin<"user">




// Interface

// interface Admin {
//     permission: string[]
// }
// interface Emp {
//     department:string
// }

// type userType<T> =
//      T extends Admin ? "Admin User" : "Emp User"

// type Result1 = UserType<Emp>





// Through infer keyword

// function getUser(){
//    return{
//        name:"Mohit",
//        age:30
//    }
// }

// type GetUserType<T> =
//       T extends  (...args: any[]) => infer R ? R : never

// type  User = GetUserType<typeof getUser>;