type User5 = {
    name: string;
    age: number;
};
type BooleanUser = {
    [key in keyof User5]: boolean;
};
declare const userStatus: BooleanUser;
