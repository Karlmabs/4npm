import {Test, TestingModule} from '@nestjs/testing';
import {ActionTypesService} from './action-types.service';

describe('ActionTypesService', () => {
  let service: ActionTypesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ActionTypesService],
    }).compile();

    service = module.get<ActionTypesService>(ActionTypesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
