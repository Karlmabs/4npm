import {Body, Controller, Delete, Get, Param, Patch, Post,} from '@nestjs/common';
import {ActionTypesService} from './action-types.service';
import {CreateActionTypeDto} from './dto/create-action-type.dto';
import {UpdateActionTypeDto} from './dto/update-action-type.dto';
import {ApiTags} from '@nestjs/swagger';

@ApiTags('action-types')
@Controller('action-types')
export class ActionTypesController {
  constructor(private readonly actionTypesService: ActionTypesService) {}

  @Post()
  create(@Body() createActionTypeDto: CreateActionTypeDto) {
    return this.actionTypesService.create(createActionTypeDto);
  }

  @Get()
  findAll() {
    return this.actionTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.actionTypesService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateActionTypeDto: UpdateActionTypeDto,
  ) {
    return this.actionTypesService.update(+id, updateActionTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.actionTypesService.remove(+id);
  }
}
