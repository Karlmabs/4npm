import {Module} from '@nestjs/common';
import {ActionsService} from './actions.service';
import {ActionsController} from './actions.controller';
import {LoggerService} from 'src/service/loggerService';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Action} from './entities/action.entity';
import {User} from '../users/entities/user.entity';
import {ActionType} from '../action-types/entities/action-type.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Action, User, ActionType])],
  controllers: [ActionsController],
  providers: [ActionsService, LoggerService],
})
export class ActionsModule {}
