// Record<Keys,valueType>


// type UserRole={
//     admin:string;
//     user:string;
//     guest:string
// }



// type UserRole = Record<
//    "admin" | "user" | "guest",
//    string >;

// const roles: UserRole = {
//      admin: "Full Access",
//      user: "Limited Access",
//      guest: "Read Only"
// }

// console.log(roles);



// Record with number

// type StudentMarks = Record<string,number>;

// const marks22: StudentMarks = {
//     Mohit:95,
//     Rahul:60,
//     Amit:30
// }
// console.log(marks22);



type User34 = {
     name:string;
     age:number
}

type Users = Record<string,User34>;

const users78:Users={
    user1:{
      name:"Mohit",
      age:34
    },
    user2:{
       name:"Alex",
       age:40
    },
}
console.log(users78);