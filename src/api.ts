//   API Calling

// interface User27{
//    id:number;
//    name:string;
//    email:string;
// }

// async function getUser(): Promise<User27[]>{
//     const res = await fetch("https://jsonplaceholder.typicode.com/users");

//     const users56: User27[] = await res.json();

//     console.log(users56);

//     users56.forEach((user2)=>{
//        console.log(user2.name);
//     })
// }
// getUser();




// Error Handling 

// async function getUser() {
//     try {
//       const res = await fetch("https://jsonplaceholder.typicode.com/users");

//       const users = await res.json();

//       console.log(users)
//     } catch (error) {
//        console.log("Something went wrong");
//     }
// }


import axios from "axios";

interface Products{
    id:number;
    title:string;
    price:string
}

async function getProduct(){
    const res = await axios.get<Products[]>("https://fakestoreapi.com/products");

    console.log(res.data);
}
getProduct()
