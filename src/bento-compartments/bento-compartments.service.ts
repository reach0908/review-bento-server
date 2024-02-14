import { Injectable } from '@nestjs/common';
import { CreateBentoCompartmentDto } from './dto/create-bento-compartment.dto';
import { UpdateBentoCompartmentDto } from './dto/update-bento-compartment.dto';

@Injectable()
export class BentoCompartmentsService {
  create(createBentoCompartmentDto: CreateBentoCompartmentDto) {
    return 'This action adds a new bentoCompartment';
  }

  findAll() {
    return `This action returns all bentoCompartments`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bentoCompartment`;
  }

  update(id: number, updateBentoCompartmentDto: UpdateBentoCompartmentDto) {
    return `This action updates a #${id} bentoCompartment`;
  }

  remove(id: number) {
    return `This action removes a #${id} bentoCompartment`;
  }
}
