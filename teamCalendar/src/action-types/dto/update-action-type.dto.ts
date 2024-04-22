import {PartialType} from '@nestjs/swagger';
import {CreateActionTypeDto} from './create-action-type.dto';

export class UpdateActionTypeDto extends PartialType(CreateActionTypeDto) {}
