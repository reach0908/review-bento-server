import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationReviewsService } from './application-reviews.service';

describe('ApplicationReviewsService', () => {
  let service: ApplicationReviewsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ApplicationReviewsService],
    }).compile();

    service = module.get<ApplicationReviewsService>(ApplicationReviewsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
