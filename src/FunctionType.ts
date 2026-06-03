// let add : (
//     a: number,
//     b: number
// ) => number

function greet8(username: string){
    console.log("Hello", username);
}
greet8("Alex");


function add5(a: number, b:number){
    console.log(a+b);
}
add5(10,20);


// void doesn't return anything
// Function with multiple parameters

function multiply2(
    a: number,
    b: number
):number {
    return a*b;
}
console.log(multiply2(10,20));


// Function Type Expression and return

let subtract : (
    x:number,
    y:number
) => number

subtract = (a,b)=>{
    return a-b
}
console.log(subtract(20,5));



// Function type with callbacks

function processData(
    callback:(
        value:number
    ) => void
){
    callback(100)
}

processData((num)=>{
    console.log(num);
})



// Another example

function calculate(
    a:number,
    b:number,
    operator:(
       x:number,
       y:number
    ) => number
){
    return operator(a,b)
}

let result45 = calculate(
    10,
    20,
    (x,y)=> x+y
)

console.log(result45);