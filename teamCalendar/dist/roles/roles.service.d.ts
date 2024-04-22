import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {Role} from './entities/role.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';

export declare class RolesService {
    private roleRepository;
    private readonly loggerService;
    constructor(roleRepository: Repository<Role>, loggerService: LoggerService);
    onModuleInit(): Promise<void>;
    create(createRoleDto: CreateRoleDto): Promise<Role>;
    findAll(): Promise<Role[]>;
    findOne(id: number): Promise<Role | null>;
    update(id: number, updateRoleDto: UpdateRoleDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<void>;
}
