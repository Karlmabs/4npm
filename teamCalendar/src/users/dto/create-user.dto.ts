import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty, IsStrongPassword} from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  name: string;

  @ApiProperty()
  @IsEmail()
  email: string;

  @ApiProperty()
  @IsNotEmpty()
  username: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsStrongPassword()
  password: string;

  @ApiProperty()
  role: number;
}
