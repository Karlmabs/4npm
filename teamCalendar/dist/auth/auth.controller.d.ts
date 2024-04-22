import {AuthService} from './auth.service';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {UsersService} from '../users/users.service';
import {LoginDto} from '../users/dto/login-dto';

export declare class AuthController {
    private authService;
    private userService;
    constructor(authService: AuthService, userService: UsersService);
    signIn(signInDto: LoginDto): Promise<{
        access_token: string;
        user: import("../users/entities/user.entity").User;
    }>;
    signUp(createUser: CreateUserDto): Promise<import("../users/entities/user.entity").User>;
    refreshToken(token: string): Promise<{
        access_token: string;
    }>;
}
