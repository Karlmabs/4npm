import {Test, TestingModule} from '@nestjs/testing';
import {ActionTypesController} from './action-types.controller';
import {ActionTypesService} from './action-types.service';

describe('ActionTypesController', () => {
  let controller: ActionTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ActionTypesController],
      providers: [ActionTypesService],
    }).compile();

    controller = module.get<ActionTypesController>(ActionTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
