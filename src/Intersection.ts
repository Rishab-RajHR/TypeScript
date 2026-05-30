// type Person7 = {
//     username:string
// }
// type Emp2 = {
//     salary:number
// }

// type staff = Person7 & Emp2

type User3 = {
    username:string
}
type Admin = {
   permission:string[]
}

type AdminUser = User3 & Admin

let admin: AdminUser = {
    username : "Alex",
    permission : ["read","write"]
}

console.log(admin);




// Through interface 
interface Person4 {
    username: string
}
interface Emp5 {
    salary:number
}

type Staff3 = Person4 & Emp5

let worker2 : Staff3 = {
    username:"Alex",
    salary:40000
}
console.log(worker2);