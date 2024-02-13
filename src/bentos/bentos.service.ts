import { Injectable } from '@nestjs/common';
import { CreateBentoDto } from './dto/create-bento.dto';
import { UpdateBentoDto } from './dto/update-bento.dto';

@Injectable()
export class BentosService {
  create(createBentoDto: CreateBentoDto) {
    return 'This action adds a new bento';
  }

  findAll() {
    return `This action returns all bentos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bento`;
  }

  update(id: number, updateBentoDto: UpdateBentoDto) {
    return `This action updates a #${id} bento`;
  }

  remove(id: number) {
    return `This action removes a #${id} bento`;
  }
}
