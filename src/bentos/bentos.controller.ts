import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BentosService } from './bentos.service';
import { CreateBentoDto } from './dto/create-bento.dto';
import { UpdateBentoDto } from './dto/update-bento.dto';

@Controller('bentos')
export class BentosController {
  constructor(private readonly bentosService: BentosService) {}

  @Post()
  create(@Body() createBentoDto: CreateBentoDto) {
    return this.bentosService.create(createBentoDto);
  }

  @Get()
  findAll() {
    return this.bentosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bentosService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBentoDto: UpdateBentoDto) {
    return this.bentosService.update(+id, updateBentoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bentosService.remove(+id);
  }
}
