import {ActionTypesService} from './action-types.service';
import {CreateActionTypeDto} from './dto/create-action-type.dto';
import {UpdateActionTypeDto} from './dto/update-action-type.dto';

export declare class ActionTypesController {
    private readonly actionTypesService;
    constructor(actionTypesService: ActionTypesService);
    create(createActionTypeDto: CreateActionTypeDto): Promise<import("./entities/action-type.entity").ActionType>;
    findAll(): Promise<import("./entities/action-type.entity").ActionType[]>;
    findOne(id: string): Promise<import("./entities/action-type.entity").ActionType>;
    update(id: string, updateActionTypeDto: UpdateActionTypeDto): Promise<import("typeorm").UpdateResult>;
    remove(id: string): Promise<void>;
}
