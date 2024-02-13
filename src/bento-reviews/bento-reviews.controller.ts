import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BentoReviewsService } from './bento-reviews.service';
import { CreateBentoReviewDto } from './dto/create-bento-review.dto';
import { UpdateBentoReviewDto } from './dto/update-bento-review.dto';

@Controller('bento-reviews')
export class BentoReviewsController {
  constructor(private readonly bentoReviewsService: BentoReviewsService) {}

  @Post()
  create(@Body() createBentoReviewDto: CreateBentoReviewDto) {
    return this.bentoReviewsService.create(createBentoReviewDto);
  }

  @Get()
  findAll() {
    return this.bentoReviewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bentoReviewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBentoReviewDto: UpdateBentoReviewDto) {
    return this.bentoReviewsService.update(+id, updateBentoReviewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bentoReviewsService.remove(+id);
  }
}
