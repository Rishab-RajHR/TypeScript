let id4: string | number;
id4 = 101;
id4 = "Alexid";
// id4 = true  => Not allowed because it is boolean
console.log(id4);


// Union with the help of function
function printId(
   id: string | number
){
    console.log(id);
}
printId(101)