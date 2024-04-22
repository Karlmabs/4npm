import {Action} from 'src/actions/entities/action.entity';
import {Role} from '../../roles/entities/role.entity';

export declare class User {
    id: number;
    name: string;
    email: string;
    username: string;
    password: string;
    role: Role;
    actions: Action[];
    constructor(name: string, mail: string, username: string, password: string, role: Role);
    hashPassword(): Promise<void>;
}
