type User6 = {
    id: number;
    name: string;
    email: string;
    age: number;
};
type UpdatedUser = Partial<User>;
declare const user5: UpdatedUser;
type User0 = {
    id: number;
    name: string;
    email: string;
    age: number;
};
type UserBasicInfo = Pick<User0, "name" | "email">;
declare const user0: UserBasicInfo;
