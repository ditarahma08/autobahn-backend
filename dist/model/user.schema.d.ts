/// <reference types="mongoose/types/pipelinestage" />
/// <reference types="mongoose" />
export type UserDocument = User & Document;
export declare class User {
    fullname: string;
    email: string;
    password: string;
    createdDate: Date;
}
export declare const UserSchema: import("mongoose").Schema<User, import("mongoose").Model<User, any, any, any>, any, any>;
