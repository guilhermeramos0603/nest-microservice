import { Module } from '@nestjs/common';
import { ProductsApiAController } from './products.controller';
import { ProductApiAService } from './shared/product.service/product.service';
import { ProductApiASchema } from './schemas/product.schema';
import { MongooseModule } from '@nestjs/mongoose'
@Module({
    imports: [MongooseModule.forFeature([{ name: 'ProductApiA', schema: ProductApiASchema }])],
    controllers: [ProductsApiAController],
    providers: [ProductApiAService]
})
export class ProductsApiAModule { }
