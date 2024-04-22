import {ActionsService} from './actions.service';
import {CreateActionDto} from './dto/create-action.dto';

export declare class ActionsController {
    private readonly actionsService;
    constructor(actionsService: ActionsService);
    create(createActionDto: CreateActionDto): Promise<import("./entities/action.entity").Action>;
    findAll(): Promise<import("./entities/action.entity").Action[]>;
    findOne(id: string): Promise<import("./entities/action.entity").Action>;
    update(id: string, updateActionDto: CreateActionDto): Promise<import("./entities/action.entity").Action>;
    remove(id: string): Promise<void>;
}
