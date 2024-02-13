import { Module } from '@nestjs/common';
import { BentosService } from './bentos.service';
import { BentosController } from './bentos.controller';

@Module({
  controllers: [BentosController],
  providers: [BentosService],
})
export class BentosModule {}
