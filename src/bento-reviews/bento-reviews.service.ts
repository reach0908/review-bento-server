import { Injectable } from '@nestjs/common';
import { CreateBentoReviewDto } from './dto/create-bento-review.dto';
import { UpdateBentoReviewDto } from './dto/update-bento-review.dto';

@Injectable()
export class BentoReviewsService {
  create(createBentoReviewDto: CreateBentoReviewDto) {
    return 'This action adds a new bentoReview';
  }

  findAll() {
    return `This action returns all bentoReviews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bentoReview`;
  }

  update(id: number, updateBentoReviewDto: UpdateBentoReviewDto) {
    return `This action updates a #${id} bentoReview`;
  }

  remove(id: number) {
    return `This action removes a #${id} bentoReview`;
  }
}
