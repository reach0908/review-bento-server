import { Test, TestingModule } from '@nestjs/testing';
import { BentoCompartmentsService } from './bento-compartments.service';

describe('BentoCompartmentsService', () => {
  let service: BentoCompartmentsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BentoCompartmentsService],
    }).compile();

    service = module.get<BentoCompartmentsService>(BentoCompartmentsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
