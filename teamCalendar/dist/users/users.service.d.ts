import {CreateUserDto} from './dto/create-user.dto';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';
import {Role} from '../roles/entities/role.entity';

export declare class UsersService {
    private usersRepository;
    private roleRepository;
    private readonly loggerService;
    constructor(usersRepository: Repository<User>, roleRepository: Repository<Role>, loggerService: LoggerService);
    onModuleInit(): Promise<void>;
    create(createUserDto: CreateUserDto): Promise<User>;
    findAll(): Promise<User[]>;
    update(id: number, updateUserDto: CreateUserDto): Promise<User>;
    findOne(id: number): Promise<User | null>;
    findByUsername(username: string): Promise<User | null>;
    remove(id: number): Promise<void>;
}
