import { PartialType } from '@nestjs/swagger';
import { CreateBentoReviewDto } from './create-bento-review.dto';

export class UpdateBentoReviewDto extends PartialType(CreateBentoReviewDto) {}
