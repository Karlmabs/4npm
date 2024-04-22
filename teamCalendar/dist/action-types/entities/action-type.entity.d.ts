import {Action} from '../../actions/entities/action.entity';

export declare class ActionType {
    id: number;
    name: string;
    actions: Action[];
    constructor(name: string);
}
