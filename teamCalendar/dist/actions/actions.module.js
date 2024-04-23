"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ActionsModule = void 0;
const common_1 = require("@nestjs/common");
const actions_service_1 = require("./actions.service");
const actions_controller_1 = require("./actions.controller");
const loggerService_1 = require("../service/loggerService");
const typeorm_1 = require("@nestjs/typeorm");
const action_entity_1 = require("./entities/action.entity");
const user_entity_1 = require("../users/entities/user.entity");
const action_type_entity_1 = require("../action-types/entities/action-type.entity");
let ActionsModule = class ActionsModule {
};
exports.ActionsModule = ActionsModule;
exports.ActionsModule = ActionsModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([action_entity_1.Action, user_entity_1.User, action_type_entity_1.ActionType])],
        controllers: [actions_controller_1.ActionsController],
        providers: [actions_service_1.ActionsService, loggerService_1.LoggerService],
    })
], ActionsModule);
//# sourceMappingURL=actions.module.js.map