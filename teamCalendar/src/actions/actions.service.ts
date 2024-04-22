import {Injectable} from '@nestjs/common';
import {CreateActionDto} from './dto/create-action.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Action} from './entities/action.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';
import {ActionType} from '../action-types/entities/action-type.entity';
import {User} from '../users/entities/user.entity';

@Injectable()
export class ActionsService {
  constructor(
    @InjectRepository(Action)
    private actionRepository: Repository<Action>,
    @InjectRepository(ActionType)
    private actionTypeRepository: Repository<ActionType>,
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly loggerService: LoggerService,
  ) {}

  async create(createActionDto: CreateActionDto) {
    // return 'This action adds a new action';
    this.loggerService.debug('New action creation');

    const actionType = await this.actionTypeRepository.findOneBy({
      id: createActionDto.id_type,
    });

    const user = await this.userRepository.findOneBy({
      id: createActionDto.id_user,
    });

    const newAction = new Action(createActionDto.date, user, actionType);

    return this.actionRepository.save(newAction);
  }

  findAll(): Promise<Action[]> {
    // return `This action returns all actions`;
    return this.actionRepository.find({ relations: ['type', 'user'] });
  }

  findOne(id: number): Promise<Action | null> {
    return this.actionRepository.findOne({
      where: { id },
      relations: ['type', 'user'],
    });
    // return `This action returns a #${id} action`;
  }

  async update(id: number, createActionDto: CreateActionDto) {
    this.loggerService.log('New action update');

    const action = await this.actionRepository.findOneBy({ id });

    const actionType = await this.actionTypeRepository.findOneBy({
      id: createActionDto.id_type,
    });

    const user = await this.userRepository.findOneBy({
      id: createActionDto.id_user,
    });

    action.date = createActionDto.date;
    action.user = user;
    action.type = actionType;

    return this.actionRepository.save(action);
  }

  async remove(id: number): Promise<void> {
    // return `This action removes a #${id} action`;
    await this.actionRepository.delete(id);
  }
}
