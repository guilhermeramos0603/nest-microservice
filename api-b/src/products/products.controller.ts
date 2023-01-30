import { Controller, Get, Param } from '@nestjs/common';
import { ProductApiBService } from './shared/product.service/product.service';
import { ProductApiB } from './shared/product/product';

@Controller('products')
export class ProductsApiBController {
    constructor(
        private productApiBService: ProductApiBService
    ) { }

    @Get(':name')
    async getAll(@Param('name') name: string): Promise<ProductApiB[]> {
        return this.productApiBService.getAll(name)
    }
}
