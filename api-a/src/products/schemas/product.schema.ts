import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductApiADocument = HydratedDocument<ProductApiA>;

@Schema()
export class ProductApiA {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    value: string;
}

export const ProductApiASchema = SchemaFactory.createForClass(ProductApiA);

