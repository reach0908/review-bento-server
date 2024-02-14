import { Test, TestingModule } from '@nestjs/testing';
import { BentoCompartmentsController } from './bento-compartments.controller';
import { BentoCompartmentsService } from './bento-compartments.service';

describe('BentoCompartmentsController', () => {
  let controller: BentoCompartmentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BentoCompartmentsController],
      providers: [BentoCompartmentsService],
    }).compile();

    controller = module.get<BentoCompartmentsController>(BentoCompartmentsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
