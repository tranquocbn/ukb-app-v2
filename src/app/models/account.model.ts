/* eslint-disable @typescript-eslint/naming-convention */
export interface IAccount {
    code: string;
    password: string;
}

export enum Role {
    TEACHER = 1,
    STUDENT = 2,
    HOMEROOM_TEACHER = 1
}

export interface IUser {
    address: string;
    avatar: string;
    birthday: string;
    class_id: string;
    code: string;
    created_at: string;
    email: string;
    gender: 0 | 1;
    id: number;
    name: string;
    phone: string;
    role: Role;
    service_id: number;
    updated_at: string;
}

export interface IResponseAccount {
    status: number;
    message: string;
    data: {
        [key: string]: IUser;
    };
}
