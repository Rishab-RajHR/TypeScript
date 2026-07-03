"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Employee = void 0;
class Employee {
    name;
    constructor(name) {
        this.name = name;
    }
    showInfo() {
        console.log(this.name);
    }
}
exports.Employee = Employee;
