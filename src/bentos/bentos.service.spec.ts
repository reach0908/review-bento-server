import { Test, TestingModule } from '@nestjs/testing';
import { BentosService } from './bentos.service';

describe('BentosService', () => {
  let service: BentosService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BentosService],
    }).compile();

    service = module.get<BentosService>(BentosService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
