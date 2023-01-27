import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsApiBController } from './products.controller';
import { ProductApiBSchema } from './schema/product.schema';
import { ProductApiBService } from './shared/product.service/product.service';

@Module({
    imports: [MongooseModule.forFeature([{ name: 'ProductApiB', schema: ProductApiBSchema }])],
    controllers: [ProductsApiBController],
    providers: [ProductApiBService]
})
export class ProductsApiBModule { }
