import {ApiProperty} from '@nestjs/swagger';

export class CreateActionDto {
  @ApiProperty()
  date: Date;

  @ApiProperty()
  id_user: number;

  @ApiProperty()
  id_type: number;
}
