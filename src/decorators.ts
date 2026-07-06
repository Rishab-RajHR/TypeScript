// function Logger(target: Function){
//     console.log("Class Created");
//     console.log(target.name);
// }

// @Logger
// class User78{
//     constructor(){
//        console.log("User Const")
//     }
// }

// const user56 = new User78()


// Method Decorators

// function LogMethod(
//     target:any,
//     propertyKey: string,
//     description: PropertyDescriptor
// ){
//     console.log(`Method: ${propertyKey}`);
// }

// class User56{
//   @LogMethod
//   login(){
//      console.log("Login");
//   }
// }





// Property Decorators

// function LogProperty(
//    target:any,
//    propertyKey:string
// ){
//    console.log(`Property: ${propertyKey}`);
// }

// class User47{
//     @LogProperty
//     name = "Alex"
// }





// Parameter Decorator

function LogParameter(
    target:any,
    methdName: string,
    parameterIndex:number
){
   console.log(`Parameter Index: ${parameterIndex}`);
}

class User88{
     login(
        @LogParameter
        username:string
     ){}
}