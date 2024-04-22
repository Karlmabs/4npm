import {Module} from '@nestjs/common';
//import { AppController } from './app.controller';
//import { AppService } from './app.service';
import {UsersModule} from './users/users.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {DataSource} from 'typeorm';
import {User} from './users/entities/user.entity';
import {Action} from './actions/entities/action.entity';
import {ActionsModule} from './actions/actions.module';
import {ActionType} from './action-types/entities/action-type.entity';
import {ActionTypesModule} from './action-types/action-types.module';
import {RolesModule} from './roles/roles.module';
import {Role} from './roles/entities/role.entity';
import {AuthModule} from './auth/auth.module';

@Module({
  imports: [
    ActionsModule,
    ActionTypesModule,
    RolesModule,
    UsersModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'password',
      database: 'teamcalendar',
      entities: [User, Action, ActionType, Role],
      synchronize: true,
    }),
    ActionsModule,
    ActionTypesModule,
    RolesModule,
    AuthModule,
  ],
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {
  constructor(private dataSource: DataSource) {}
}
