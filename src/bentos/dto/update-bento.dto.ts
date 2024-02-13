import { PartialType } from '@nestjs/mapped-types';
import { CreateBentoDto } from './create-bento.dto';

export class UpdateBentoDto extends PartialType(CreateBentoDto) {}
