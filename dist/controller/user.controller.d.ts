import { User } from "../model/user.schema";
import { UserService } from "../service/user.service";
import { JwtService } from '@nestjs/jwt';
export declare class UserController {
    private readonly userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    Signup(response: any, user: User): Promise<any>;
    SignIn(response: any, user: User): Promise<any>;
    GetOne(id: any, response: any): Promise<any>;
}
