declare class Emp4 {
    protected salary: number;
    constructor(salary: number);
}
declare class Dev extends Emp4 {
    showSalary(): void;
}
declare const dev2: Dev;
