import {CreateActionDto} from './dto/create-action.dto';
import {Action} from './entities/action.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';
import {ActionType} from '../action-types/entities/action-type.entity';
import {User} from '../users/entities/user.entity';

export declare class ActionsService {
    private actionRepository;
    private actionTypeRepository;
    private userRepository;
    private readonly loggerService;
    constructor(actionRepository: Repository<Action>, actionTypeRepository: Repository<ActionType>, userRepository: Repository<User>, loggerService: LoggerService);
    create(createActionDto: CreateActionDto): Promise<Action>;
    findAll(): Promise<Action[]>;
    findOne(id: number): Promise<Action | null>;
    update(id: number, createActionDto: CreateActionDto): Promise<Action>;
    remove(id: number): Promise<void>;
}
