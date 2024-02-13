import { Test, TestingModule } from '@nestjs/testing';
import { BentoReviewsService } from './bento-reviews.service';

describe('BentoReviewsService', () => {
  let service: BentoReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BentoReviewsService],
    }).compile();

    service = module.get<BentoReviewsService>(BentoReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
