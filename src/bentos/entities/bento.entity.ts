import { Prop, Schema, SchemaOptions } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { BentoCompartment } from 'src/bento-compartments/entities/bento-compartment.entity';

export type BentoDocument = HydratedDocument<Bento>;

const options: SchemaOptions = {
    timestamps: true,
};

enum BentoType {
    SMALL = 'small',
    MEDIUM = 'medium',
    LARGE = 'large',
}

@Schema(options)
export class Bento {
    @Prop({
        unique: true,
        default: () => uuid(),
    })
    id: string;
    userId: string;
    type: BentoType;
    category: string;
    compartmentList: BentoCompartment['id'];
}
