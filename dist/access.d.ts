declare class Emp2 {
    protected salary: number;
    constructor(salary: number);
}
declare class Developer extends Emp2 {
    showSalary(): void;
}
declare const dev: Developer;
