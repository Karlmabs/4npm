import {CreateActionTypeDto} from './dto/create-action-type.dto';
import {UpdateActionTypeDto} from './dto/update-action-type.dto';
import {ActionType} from './entities/action-type.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';

export declare class ActionTypesService {
    private actionTypeRepository;
    private readonly loggerService;
    constructor(actionTypeRepository: Repository<ActionType>, loggerService: LoggerService);
    create(createActionTypeDto: CreateActionTypeDto): Promise<ActionType>;
    findAll(): Promise<ActionType[]>;
    findOne(id: number): Promise<ActionType | null>;
    update(id: number, updateActionTypeDto: UpdateActionTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
