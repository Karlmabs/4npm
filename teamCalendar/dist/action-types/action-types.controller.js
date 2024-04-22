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
exports.ActionTypesController = void 0;
const common_1 = require("@nestjs/common");
const action_types_service_1 = require("./action-types.service");
const create_action_type_dto_1 = require("./dto/create-action-type.dto");
const update_action_type_dto_1 = require("./dto/update-action-type.dto");
const swagger_1 = require("@nestjs/swagger");
let ActionTypesController = class ActionTypesController {
    constructor(actionTypesService) {
        this.actionTypesService = actionTypesService;
    }
    create(createActionTypeDto) {
        return this.actionTypesService.create(createActionTypeDto);
    }
    findAll() {
        return this.actionTypesService.findAll();
    }
    findOne(id) {
        return this.actionTypesService.findOne(+id);
    }
    update(id, updateActionTypeDto) {
        return this.actionTypesService.update(+id, updateActionTypeDto);
    }
    remove(id) {
        return this.actionTypesService.remove(+id);
    }
};
exports.ActionTypesController = ActionTypesController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_action_type_dto_1.CreateActionTypeDto]),
    __metadata("design:returntype", void 0)
], ActionTypesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], ActionTypesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActionTypesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_action_type_dto_1.UpdateActionTypeDto]),
    __metadata("design:returntype", void 0)
], ActionTypesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], ActionTypesController.prototype, "remove", null);
exports.ActionTypesController = ActionTypesController = __decorate([
    (0, swagger_1.ApiTags)('action-types'),
    (0, common_1.Controller)('action-types'),
    __metadata("design:paramtypes", [action_types_service_1.ActionTypesService])
], ActionTypesController);
//# sourceMappingURL=action-types.controller.js.map