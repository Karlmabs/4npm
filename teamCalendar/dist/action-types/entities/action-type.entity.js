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
exports.ActionType = void 0;
const typeorm_1 = require("typeorm");
const action_entity_1 = require("../../actions/entities/action.entity");
let ActionType = class ActionType {
    constructor(name) {
        this.name = name;
    }
};
exports.ActionType = ActionType;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ActionType.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], ActionType.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => action_entity_1.Action, (action) => action.type),
    __metadata("design:type", Array)
], ActionType.prototype, "actions", void 0);
exports.ActionType = ActionType = __decorate([
    (0, typeorm_1.Entity)(),
    __metadata("design:paramtypes", [String])
], ActionType);
//# sourceMappingURL=action-type.entity.js.map