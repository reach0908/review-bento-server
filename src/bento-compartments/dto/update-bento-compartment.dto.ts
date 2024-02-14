import { PartialType } from '@nestjs/swagger';
import { CreateBentoCompartmentDto } from './create-bento-compartment.dto';

export class UpdateBentoCompartmentDto extends PartialType(CreateBentoCompartmentDto) {}
