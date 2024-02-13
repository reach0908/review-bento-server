import { Module } from '@nestjs/common';
import { BentosService } from './bentos.service';
import { BentosController } from './bentos.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { BentoSchema } from './entities/bento.entity';

@Module({
    imports: [
        MongooseModule.forFeature([{ name: 'Bento', schema: BentoSchema }]),
    ],
    controllers: [BentosController],
    providers: [BentosService],
})
export class BentosModule {}
