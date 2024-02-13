import { Module } from '@nestjs/common';
import { BentoReviewsService } from './bento-reviews.service';
import { BentoReviewsController } from './bento-reviews.controller';

@Module({
  controllers: [BentoReviewsController],
  providers: [BentoReviewsService],
})
export class BentoReviewsModule {}
