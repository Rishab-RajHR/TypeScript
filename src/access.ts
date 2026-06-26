// Access Modifiers
// public is default access modifiers

// class Useer45{
//     public name: string;
//     constructor(name:string){
//         this.name = name
//     }
// }
// const user45 = new Useer45("Alex");
// console.log(user45.name);


// Private can be accessed within the class only not outside

// class BankAcc{
//     private balance: number;
//     constructor(balance: number){
//         this.balance = balance
//     }
//     showBalance(){
//         console.log(this.balance);
//     }
// }
// const account = new BankAcc(5000);
// account.showBalance();



// Protected from one class to another class

class Emp2 {
    protected salary:number;

    constructor(salary:number){
       this.salary = salary
    }
}

class Developer extends Emp2{
   showSalary(){
      console.log(this.salary);
   }
}

const dev= new Developer(50000);
dev.showSalary();

