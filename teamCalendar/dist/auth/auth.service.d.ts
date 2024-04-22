import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import {User} from '../users/entities/user.entity';

export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    signIn(username: string, pass: string): Promise<{
        access_token: string;
        user: User;
    }>;
    refreshToken(oldToken: string): Promise<{
        access_token: string;
    }>;
}
