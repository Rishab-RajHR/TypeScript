// class User33{
//    public name:string = "";
// }
// const user45 = new User33();
// user45.name = "Alex Pandian";
// console.log(user45.name);



// Data Validation using getter and setter

class User33{
    private _name = "";
    set name(value:string){
       if(value.length < 3){
           console.log("Name Must be atleast 3 Characters");
       }
       this._name = value;
    }
    get name(){
        return this._name
    }
}
const user45 = new User33();
user45.name = "Alex Pandian";
console.log(user45.name);