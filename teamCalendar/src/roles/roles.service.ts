import {Injectable} from '@nestjs/common';
import {CreateRoleDto} from './dto/create-role.dto';
import {UpdateRoleDto} from './dto/update-role.dto';
import {InjectRepository} from '@nestjs/typeorm';
import {Role} from './entities/role.entity';
import {Repository} from 'typeorm';
import {LoggerService} from 'src/service/loggerService';

@Injectable()
export class RolesService {
  constructor(
    @InjectRepository(Role)
    private roleRepository: Repository<Role>,
    private readonly loggerService: LoggerService,
  ) {}

  async onModuleInit(): Promise<void> {
    const userRole = await this.roleRepository.findOne({
      where: { name: 'user' },
    });
    const adminRole = await this.roleRepository.findOne({
      where: { name: 'admin' },
    });

    if (!userRole) {
      const newUserRole = this.roleRepository.create({ name: 'user' });
      await this.roleRepository.save(newUserRole);
    }

    if (!adminRole) {
      const newAdminRole = this.roleRepository.create({ name: 'admin' });
      await this.roleRepository.save(newAdminRole);
    }
  }

  async create(createRoleDto: CreateRoleDto): Promise<Role> {
    this.loggerService.log('create new role');

    const role = new Role(createRoleDto.name);
    return this.roleRepository.save(role);
  }

  findAll(): Promise<Role[]> {
    return this.roleRepository.find();
  }

  findOne(id: number): Promise<Role | null> {
    return this.roleRepository.findOneBy({ id });
  }

  update(id: number, updateRoleDto: UpdateRoleDto) {
    return this.roleRepository.update(id, updateRoleDto);
  }

  async remove(id: number): Promise<void> {
    await this.roleRepository.delete(id);
  }
}
