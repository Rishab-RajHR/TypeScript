type User1 = {
    userName: string;
    age: number;
};
declare let user1: User1;
declare let user2: User1;
interface Product {
    title: string;
    price: number;
}
declare let laptop: Product;
interface User8 {
    userName: string;
}
interface Admin4 extends User8 {
    role: string;
}
