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
exports.Action = void 0;
const typeorm_1 = require("typeorm");
const user_entity_1 = require("../../users/entities/user.entity");
const action_type_entity_1 = require("../../action-types/entities/action-type.entity");
let Action = class Action {
    constructor(date, user, type) {
        this.date = date;
        this.user = user;
        this.type = type;
    }
};
exports.Action = Action;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Action.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Date)
], Action.prototype, "date", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entity_1.User, (user) => user.actions),
    __metadata("design:type", user_entity_1.User)
], Action.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => action_type_entity_1.ActionType, (typeAction) => typeAction.actions),
    __metadata("design:type", action_type_entity_1.ActionType)
], Action.prototype, "type", void 0);
exports.Action = Action = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [Date, user_entity_1.User, action_type_entity_1.ActionType])
], Action);
//# sourceMappingURL=action.entity.js.map