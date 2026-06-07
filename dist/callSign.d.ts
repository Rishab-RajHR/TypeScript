interface LoginFunction {
    (email: string, password: string): boolean;
}
declare let login: LoginFunction;
