// Index Signature

// interface UserRoles {
//     [key:string]:string
// }


// Dynamic Object Properties

interface Languages {
    [key:string]: string
}

let language:Languages={
    en:"English",
    hi:"Hindi",
    fr:"French"
}

console.log(language.en);




// With number using the Dynamic Object

interface Scores{
   [index:number]:string
}

let studentScore:Scores={
    1:"A",
    2:"B"
}

