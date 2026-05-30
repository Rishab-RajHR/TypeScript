type User3 = {
    username: string;
};
type Admin = {
    permission: string[];
};
type AdminUser = User3 & Admin;
declare let admin: AdminUser;
interface Person4 {
    username: string;
}
interface Emp5 {
    salary: number;
}
type Staff3 = Person4 & Emp5;
declare let worker2: Staff3;
