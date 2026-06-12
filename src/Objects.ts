// let user2 = {
//     userName:"Alex",
//     age:29
// }
// console.log(user2.userName);


// In TypeScript (Object Property and value)

let user3: {
     userName: string,
     age: number
}

user3 = {
    userName:"Alex",
    age:29
}
console.log(user3.userName);
console.log(user3.age);



// Another example of the Object

// let products = {
//     productName:"Laptop",
//     price: 5000
// }
// // For updating the value
// products.price = 4500;
// console.log(products.productName);
// console.log(products.price);




// let products:{
//     readonly productName: string,   // for reading purpose only
//     price?: number         // optional
// }

// products = {
//     productName:"Laptop",
//     price: 5000
// }

// console.log(products.productName);
// console.log(products.price);



// Nested objects (objects inside objects)
let products = {
   productName: "Laptop",
   price: 5000,
   address: {
       city:"Delhi",
       pincode: 208415
   }
}
console.log(products.address.pincode);
