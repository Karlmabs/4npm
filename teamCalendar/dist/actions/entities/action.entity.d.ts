import {User} from '../../users/entities/user.entity';
import {ActionType} from '../../action-types/entities/action-type.entity';

export declare class Action {
    id: number;
    date: Date;
    user: User;
    type: ActionType;
    constructor(date: Date, user: User, type: ActionType);
}
