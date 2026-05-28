type Person = {
    username: string;
};
type Emp = {
    salary: number;
};
type Staff = Person & Emp;
declare let worker: Staff;
