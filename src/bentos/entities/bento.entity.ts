import { Schema, SchemaOptions } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

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
    userId: string;
    type: BentoType;
    category: string;
}
