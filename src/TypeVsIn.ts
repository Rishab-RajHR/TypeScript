type User1 = {
   userName:string,
   age:number
}

let user1:User1 = {
   userName:"Alex",
   age:28
}

let user2:User1 = {
   userName:"George",
   age:30
}

console.log(user1.userName);
console.log(user2.userName);


// Type with primitive values
// type ID = string | number



// Type for intersection

// type Admin1 = User2 & {
//    role:string
// }

// type Add = {
//    a:number,
//    b:number
// } => number



//  Interface 

interface Product {
   title: string,
   price: number
}

let laptop: Product={
   title:"Macbook",
   price:120000
}
console.log(laptop.title);
console.log(laptop.price);


// Interface joining through interface keyword

interface User8{
   userName:string
}
interface Admin4 extends User8 {
    role:string
}