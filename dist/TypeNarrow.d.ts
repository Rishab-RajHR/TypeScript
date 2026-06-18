declare function printVal(value: string | number): void;
type Admin2 = {
    name: string;
    permission: string[];
};
type User = {
    name: string;
    email: string;
};
declare function getInfo2(person: Admin | User): void;
declare class Dog {
    bark(): void;
}
declare class Cat {
    meow(): void;
}
declare function makesound(animal: Dog | Cat): void;
