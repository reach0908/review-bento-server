import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BentoCompartmentsService } from './bento-compartments.service';
import { CreateBentoCompartmentDto } from './dto/create-bento-compartment.dto';
import { UpdateBentoCompartmentDto } from './dto/update-bento-compartment.dto';

@Controller('bento-compartments')
export class BentoCompartmentsController {
  constructor(private readonly bentoCompartmentsService: BentoCompartmentsService) {}

  @Post()
  create(@Body() createBentoCompartmentDto: CreateBentoCompartmentDto) {
    return this.bentoCompartmentsService.create(createBentoCompartmentDto);
  }

  @Get()
  findAll() {
    return this.bentoCompartmentsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bentoCompartmentsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBentoCompartmentDto: UpdateBentoCompartmentDto) {
    return this.bentoCompartmentsService.update(+id, updateBentoCompartmentDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bentoCompartmentsService.remove(+id);
  }
}
