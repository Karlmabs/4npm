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
exports.ActionsService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const action_entity_1 = require("./entities/action.entity");
const typeorm_2 = require("typeorm");
const loggerService_1 = require("../service/loggerService");
const action_type_entity_1 = require("../action-types/entities/action-type.entity");
const user_entity_1 = require("../users/entities/user.entity");
let ActionsService = class ActionsService {
    constructor(actionRepository, actionTypeRepository, userRepository, loggerService) {
        this.actionRepository = actionRepository;
        this.actionTypeRepository = actionTypeRepository;
        this.userRepository = userRepository;
        this.loggerService = loggerService;
    }
    async create(createActionDto) {
        this.loggerService.debug('New action creation');
        const actionType = await this.actionTypeRepository.findOneBy({
            id: createActionDto.id_type,
        });
        const user = await this.userRepository.findOneBy({
            id: createActionDto.id_user,
        });
        const newAction = new action_entity_1.Action(createActionDto.date, user, actionType);
        return this.actionRepository.save(newAction);
    }
    findAll() {
        return this.actionRepository.find({ relations: ['type', 'user'] });
    }
    findOne(id) {
        return this.actionRepository.findOne({
            where: { id },
            relations: ['type', 'user'],
        });
    }
    async update(id, createActionDto) {
        this.loggerService.log('New action update');
        const action = await this.actionRepository.findOneBy({ id });
        const actionType = await this.actionTypeRepository.findOneBy({
            id: createActionDto.id_type,
        });
        const user = await this.userRepository.findOneBy({
            id: createActionDto.id_user,
        });
        action.date = createActionDto.date;
        action.user = user;
        action.type = actionType;
        return this.actionRepository.save(action);
    }
    async remove(id) {
        await this.actionRepository.delete(id);
    }
};
exports.ActionsService = ActionsService;
exports.ActionsService = ActionsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(action_entity_1.Action)),
    __param(1, (0, typeorm_1.InjectRepository)(action_type_entity_1.ActionType)),
    __param(2, (0, typeorm_1.InjectRepository)(user_entity_1.User)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        typeorm_2.Repository,
        typeorm_2.Repository,
        loggerService_1.LoggerService])
], ActionsService);
//# sourceMappingURL=actions.service.js.map