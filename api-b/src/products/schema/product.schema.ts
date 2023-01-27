import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ProductApiBDocument = HydratedDocument<ProductApiB>;

@Schema()
export class ProductApiB {
    @Prop({ required: true })
    name: string;

    @Prop()
    description: string;

    @Prop({ required: true })
    value: string;
}

export const ProductApiBSchema = SchemaFactory.createForClass(ProductApiB);

