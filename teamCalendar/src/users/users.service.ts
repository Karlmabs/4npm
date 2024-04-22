import {Injectable} from '@nestjs/common';
import {CreateUserDto} from './dto/create-user.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {User} from './entities/user.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';
import {Role} from '../roles/entities/role.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private readonly loggerService: LoggerService,
  ) {}

  async onModuleInit(): Promise<void> {
    const adminUser = await this.usersRepository.findOne({
      where: { username: 'admin' },
    });

    if (!adminUser) {
      const adminRole = await this.roleRepository.findOne({
        where: { name: 'admin' },
      });

      const newUser = new User(
        'admin',
        'noreply@admin.com',
        'admin',
        'Password123!',
        adminRole,
      );
      await this.usersRepository.save(newUser);
    }
  }

  async create(createUserDto: CreateUserDto): Promise<User> {
    //const isMatch = await bcrypt.compare(password, hash);
    this.loggerService.log('You have created a new user debug');

    const role = await this.roleRepository.findOneBy({
      id: createUserDto.role,
    });

    if (!role) {
      throw new Error('Role not found');
    }

    const newUser = new User(
      createUserDto.name,
      createUserDto.email,
      createUserDto.username,
      createUserDto.password,
      role,
    );
    return this.usersRepository.save(newUser);
  }

  findAll(): Promise<User[]> {
    return this.usersRepository.find({ relations: ['role'] });
  }

  async update(id: number, updateUserDto: CreateUserDto): Promise<User> {
    const role = await this.roleRepository.findOneBy({
      id: updateUserDto.role,
    });
    const user = await this.usersRepository.findOne({
      where: { id },
      relations: ['role'],
    });

    if (role && user) {
      user.role = role;
      user.name = updateUserDto.name;
      user.email = updateUserDto.email;
      user.username = updateUserDto.username;
    }
    return this.usersRepository.save(user);
  }

  findOne(id: number): Promise<User | null> {
    return this.usersRepository.findOne({ where: { id }, relations: ['role'] });
  }

  findByUsername(username: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ username });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
