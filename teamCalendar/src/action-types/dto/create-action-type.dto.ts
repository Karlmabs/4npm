import {ApiProperty} from '@nestjs/swagger';

export class CreateActionTypeDto {
  @ApiProperty()
  name: string;
}
