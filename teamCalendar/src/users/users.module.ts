import {Module} from '@nestjs/common';
import {UsersService} from './users.service';
import {UsersController} from './users.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {LoggerService} from 'src/service/loggerService';
import {Role} from '../roles/entities/role.entity';
import {RolesModule} from '../roles/roles.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Role]),
    RolesModule,
  ],
  controllers: [UsersController],
  providers: [UsersService, LoggerService],
  exports: [UsersService],
})
export class UsersModule {
}
