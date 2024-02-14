import { Module } from '@nestjs/common';
import { BentoCompartmentsService } from './bento-compartments.service';
import { BentoCompartmentsController } from './bento-compartments.controller';

@Module({
  controllers: [BentoCompartmentsController],
  providers: [BentoCompartmentsService],
})
export class BentoCompartmentsModule {}
