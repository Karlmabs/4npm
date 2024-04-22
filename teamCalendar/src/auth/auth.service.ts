import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UsersService} from '../users/users.service';
import {JwtService} from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import {User} from '../users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  async signIn(
    username: string,
    pass: string,
  ): Promise<{ access_token: string; user: User }> {
    const user = await this.usersService.findByUsername(username);
    const isMatch = await bcrypt.compare(pass, user?.password);
    if (!isMatch) {
      throw new UnauthorizedException();
    }
    const payload = { sub: user.id, username: user.username };
    return {
      user,
      access_token: await this.jwtService.signAsync(payload),
    };
  }

  async refreshToken(oldToken: string): Promise<{ access_token: string }> {
    try {
      const { sub } = this.jwtService.verify(oldToken);
      const user = await this.usersService.findOne(sub);
      if (!user) {
        throw new UnauthorizedException();
      }
      const payload = { sub: user.id, username: user.username };
      return {
        access_token: await this.jwtService.signAsync(payload),
      };
    } catch (e) {
      throw new UnauthorizedException();
    }
  }
}
