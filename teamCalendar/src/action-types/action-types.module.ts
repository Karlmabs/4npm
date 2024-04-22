import {Module} from '@nestjs/common';
import {ActionTypesService} from './action-types.service';
import {ActionTypesController} from './action-types.controller';
import {TypeOrmModule} from '@nestjs/typeorm';
import {ActionType} from './entities/action-type.entity';
import {LoggerService} from 'src/service/loggerService';

@Module({
  imports: [TypeOrmModule.forFeature([ActionType])],
  controllers: [ActionTypesController],
  providers: [ActionTypesService, LoggerService],
})
export class ActionTypesModule {}
