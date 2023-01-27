import { Body, Controller, Get, Post } from '@nestjs/common';
import { ProductApiAService } from './shared/product.service/product.service';
import { ProductApiA } from './shared/product/product';


@Controller('products')
export class ProductsApiAController {
    constructor(
        private productApiAService: ProductApiAService
    ) { }

    @Post()
    async create(@Body() data: ProductApiA): Promise<ProductApiA> {
        return await this.productApiAService.create(data)
    }
}
