import { company, greet } from "./user";
import { Employee  } from "./employee";
import add from "./math";
import * as Utils from "./utils";

console.log(company);
console.log(greet("Mohit"));

const emp = new Employee("Alex");
emp.showInfo();

console.log(add(10,20));

console.log(Utils.PI);
console.log(Utils.square(5));