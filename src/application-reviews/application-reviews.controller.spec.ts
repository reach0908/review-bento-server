import { Test, TestingModule } from '@nestjs/testing';
import { ApplicationReviewsController } from './application-reviews.controller';
import { ApplicationReviewsService } from './application-reviews.service';

describe('ApplicationReviewsController', () => {
  let controller: ApplicationReviewsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ApplicationReviewsController],
      providers: [ApplicationReviewsService],
    }).compile();

    controller = module.get<ApplicationReviewsController>(ApplicationReviewsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
