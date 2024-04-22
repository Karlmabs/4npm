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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const users_module_1 = require("./users/users.module");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const user_entity_1 = require("./users/entities/user.entity");
const action_entity_1 = require("./actions/entities/action.entity");
const actions_module_1 = require("./actions/actions.module");
const action_type_entity_1 = require("./action-types/entities/action-type.entity");
const action_types_module_1 = require("./action-types/action-types.module");
const roles_module_1 = require("./roles/roles.module");
const role_entity_1 = require("./roles/entities/role.entity");
const auth_module_1 = require("./auth/auth.module");
let AppModule = class AppModule {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            actions_module_1.ActionsModule,
            action_types_module_1.ActionTypesModule,
            roles_module_1.RolesModule,
            users_module_1.UsersModule,
            typeorm_1.TypeOrmModule.forRoot({
                type: 'mysql',
                host: 'db',
                port: 3306,
                username: 'root',
                password: 'password',
                database: 'teamcalendar',
                entities: [user_entity_1.User, action_entity_1.Action, action_type_entity_1.ActionType, role_entity_1.Role],
                synchronize: true,
            }),
            actions_module_1.ActionsModule,
            action_types_module_1.ActionTypesModule,
            roles_module_1.RolesModule,
            auth_module_1.AuthModule,
        ],
    }),
    __metadata("design:paramtypes", [typeorm_2.DataSource])
], AppModule);
//# sourceMappingURL=app.module.js.map