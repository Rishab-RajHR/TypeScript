interface MultiplyFun {
    (x: number, y: number): number;
}
declare let multiply: MultiplyFun;
interface Greeting {
    (userName: string): string;
}
declare let greetUser: Greeting;
interface Calculator {
    (a: number, b: number): number;
}
declare let add1: Calculator;
declare let sub: Calculator;
declare let mul2: Calculator;
