import { Prop, Schema, SchemaOptions } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { Application } from 'src/applications/entities/application.entity';
import { v4 as uuid } from 'uuid';

export type BentoCompartmentDocument = HydratedDocument<BentoCompartment>;

const options: SchemaOptions = {
    timestamps: true,
};

@Schema(options)
export class BentoCompartment {
    @Prop({
        unique: true,
        default: () => uuid(),
    })
    id: string;
    userId: string;
    score: number;
    description: string;
    appId: Application['id'];
    appIcon: Application['appIcon'];
}
