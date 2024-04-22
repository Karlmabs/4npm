"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateActionTypeDto = void 0;
const swagger_1 = require("@nestjs/swagger");
const create_action_type_dto_1 = require("./create-action-type.dto");
class UpdateActionTypeDto extends (0, swagger_1.PartialType)(create_action_type_dto_1.CreateActionTypeDto) {
}
exports.UpdateActionTypeDto = UpdateActionTypeDto;
//# sourceMappingURL=update-action-type.dto.js.map