import { Test, TestingModule } from '@nestjs/testing';
import { BentoReviewsController } from './bento-reviews.controller';
import { BentoReviewsService } from './bento-reviews.service';

describe('BentoReviewsController', () => {
  let controller: BentoReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BentoReviewsController],
      providers: [BentoReviewsService],
    }).compile();

    controller = module.get<BentoReviewsController>(BentoReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
