import { PartialType } from '@nestjs/swagger';
import { CreateApplicationReviewDto } from './create-application-review.dto';

export class UpdateApplicationReviewDto extends PartialType(CreateApplicationReviewDto) {}
