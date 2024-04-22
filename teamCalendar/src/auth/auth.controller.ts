import {Body, Controller, HttpCode, HttpStatus, Post} from '@nestjs/common';
import {AuthService} from './auth.service';
import {CreateUserDto} from '../users/dto/create-user.dto';
import {UsersService} from '../users/users.service';
import {ApiTags} from '@nestjs/swagger';
import {LoginDto} from '../users/dto/login-dto';

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(
    private authService: AuthService,
    private userService: UsersService,
  ) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('register')
  signUp(@Body() createUser: CreateUserDto) {
    console.log('createUser', createUser);
    return this.userService.create(createUser);
  }

  @HttpCode(HttpStatus.OK)
  @Post('refresh')
  refreshToken(@Body('token') token: string) {
    return this.authService.refreshToken(token);
  }
}
