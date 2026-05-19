// Any Type
// let data1:any = "alex";
// data1 = 123;
// data1 = true;
// console.log(data1);


// let value: any = "Hello";
// value = 123;
// console.log(value.toUpperCase())


// Unknown Type
let value:unknown = "TS";
if(typeof value === "string"){
   console.log(value.toUpperCase());
}
