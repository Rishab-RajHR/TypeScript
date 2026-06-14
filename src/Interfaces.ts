interface Employee {
    readonly id:number,   // readonly
    userName: string,
    salary?: number   // Optional 
}

let employee1:Employee = {
    id: 123,
    userName: "Mohit",
    salary: 40000 
}

let employee2:Employee = {
    id: 125,
    userName: "Alex",
    salary: 50000 
}

console.log(employee1.userName);
console.log(employee2.userName);