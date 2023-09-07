
export interface ISignup{
    name: string;
    email: string;
    password: string;
    gender: string;
    address: string;
}
export interface ISignupUser extends ISignup{
    userId: number;    
}

export interface IUpdateUser{
    name?: string;
    email?: string;
    password?: string;
    gender?: string;
    address?: string;
}