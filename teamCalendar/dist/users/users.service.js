"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const user_entity_1 = require("./entities/user.entity");
const typeorm_2 = require("typeorm");
const loggerService_1 = require("../service/loggerService");
const role_entity_1 = require("../roles/entities/role.entity");
let UsersService = class UsersService {
    constructor(usersRepository, roleRepository, loggerService) {
        this.usersRepository = usersRepository;
        this.roleRepository = roleRepository;
        this.loggerService = loggerService;
    }
    async onModuleInit() {
        const adminUser = await this.usersRepository.findOne({
            where: { username: 'admin' },
        });
        if (!adminUser) {
            const adminRole = await this.roleRepository.findOne({
                where: { name: 'admin' },
            });
            const newUser = new user_entity_1.User('admin', 'noreply@admin.com', 'admin', 'Password123!', adminRole);
            await this.usersRepository.save(newUser);
        }
    }
    async create(createUserDto) {
        this.loggerService.log('You have created a new user debug');
        const role = await this.roleRepository.findOneBy({
            id: createUserDto.role,
        });
        if (!role) {
            throw new Error('Role not found');
        }
        const newUser = new user_entity_1.User(createUserDto.name, createUserDto.email, createUserDto.username, createUserDto.password, role);
        return this.usersRepository.save(newUser);
    }
    findAll() {
        return this.usersRepository.find({ relations: ['role'] });
    }
    async update(id, updateUserDto) {
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
    findOne(id) {
        return this.usersRepository.findOne({ where: { id }, relations: ['role'] });
    }
    findByUsername(username) {
        return this.usersRepository.findOneBy({ username });
    }
    async remove(id) {
        await this.usersRepository.delete(id);
    }
};
exports.UsersService = UsersService;
exports.UsersService = UsersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __param(1, (0, typeorm_1.InjectRepository)(role_entity_1.Role)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        loggerService_1.LoggerService])
], UsersService);
//# sourceMappingURL=users.service.js.map