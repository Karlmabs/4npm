"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionTypesModule = void 0;
const common_1 = require("@nestjs/common");
const action_types_service_1 = require("./action-types.service");
const action_types_controller_1 = require("./action-types.controller");
const typeorm_1 = require("@nestjs/typeorm");
const action_type_entity_1 = require("./entities/action-type.entity");
const loggerService_1 = require("../service/loggerService");
let ActionTypesModule = class ActionTypesModule {
};
exports.ActionTypesModule = ActionTypesModule;
exports.ActionTypesModule = ActionTypesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([action_type_entity_1.ActionType])],
        controllers: [action_types_controller_1.ActionTypesController],
        providers: [action_types_service_1.ActionTypesService, loggerService_1.LoggerService],
    })
], ActionTypesModule);
//# sourceMappingURL=action-types.module.js.map