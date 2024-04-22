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
exports.ActionTypesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const action_type_entity_1 = require("./entities/action-type.entity");
const typeorm_2 = require("typeorm");
const loggerService_1 = require("../service/loggerService");
let ActionTypesService = class ActionTypesService {
    constructor(actionTypeRepository, loggerService) {
        this.actionTypeRepository = actionTypeRepository;
        this.loggerService = loggerService;
    }
    async create(createActionTypeDto) {
        this.loggerService.debug('Creating new Action type');
        const actionType = new action_type_entity_1.ActionType(createActionTypeDto.name);
        return this.actionTypeRepository.save(actionType);
    }
    findAll() {
        return this.actionTypeRepository.find();
    }
    findOne(id) {
        return this.actionTypeRepository.findOneBy({ id });
    }
    update(id, updateActionTypeDto) {
        return this.actionTypeRepository.update(id, updateActionTypeDto);
    }
    async remove(id) {
        await this.actionTypeRepository.delete(id);
    }
};
exports.ActionTypesService = ActionTypesService;
exports.ActionTypesService = ActionTypesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(action_type_entity_1.ActionType)),
    __metadata("design:paramtypes", [typeorm_2.Repository,
        loggerService_1.LoggerService])
], ActionTypesService);
//# sourceMappingURL=action-types.service.js.map