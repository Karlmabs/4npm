import {Injectable} from '@nestjs/common';
import {CreateActionTypeDto} from './dto/create-action-type.dto';
import {UpdateActionTypeDto} from './dto/update-action-type.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {ActionType} from './entities/action-type.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';

@Injectable()
export class ActionTypesService {
  constructor(
    @InjectRepository(ActionType)
    private actionTypeRepository: Repository<ActionType>,
    private readonly loggerService: LoggerService,
  ) {}

  async create(createActionTypeDto: CreateActionTypeDto): Promise<ActionType> {
    this.loggerService.debug('Creating new Action type');

    const actionType = new ActionType(createActionTypeDto.name);
    return this.actionTypeRepository.save(actionType);
  }

  findAll(): Promise<ActionType[]> {
    return this.actionTypeRepository.find();
  }

  findOne(id: number): Promise<ActionType | null> {
    return this.actionTypeRepository.findOneBy({ id });
  }

  update(id: number, updateActionTypeDto: UpdateActionTypeDto) {
    return this.actionTypeRepository.update(id, updateActionTypeDto);
  }

  async remove(id: number): Promise<void> {
    await this.actionTypeRepository.delete(id);
  }
}
