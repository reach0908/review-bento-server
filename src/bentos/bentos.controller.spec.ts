import { Test, TestingModule } from '@nestjs/testing';
import { BentosController } from './bentos.controller';
import { BentosService } from './bentos.service';

describe('BentosController', () => {
  let controller: BentosController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BentosController],
      providers: [BentosService],
    }).compile();

    controller = module.get<BentosController>(BentosController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
