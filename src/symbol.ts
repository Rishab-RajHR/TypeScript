// Symbol takes unique values

// let id1 = Symbol();
// let id2 = Symbol();

// console.log(id1 === id2);


// let user = {
//     id: 1,
//     id: 2
// }

// let id1 = Symbol("id");
// let id2 = Symbol("id");
// let user = {
//    [id1]:1,
//    [id2]:2
// }
// console.log(user[id1]);


let token : symbol = Symbol("token")


// Through string
let obj = {
   id:1
}


// Through Symbol
const id = Symbol("id");
let opj = {
   [id]:1
}


// console.log("ID: "+ Symbol()); => This is wrong in Symbol
// console.log(Symbol("id").toString()); => This is the way to define the Symbol
