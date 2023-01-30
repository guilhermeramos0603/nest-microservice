import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductApiB } from '../product/product';

@Injectable()
export class ProductApiBService {
    constructor(@InjectModel('ProductApiB') private readonly productApiBModel: Model<ProductApiB>) { }

    async create(data: ProductApiB) {
        const createdProduct = new this.productApiBModel(data)
        return await createdProduct.save()
    }

    async dataReceived(data: ProductApiB) {

        const find = await this.getAll(data.name)
        if (find.length == 0) {
            console.log('Create product in API B', data)
            await this.create(data)
        }
        else {
            console.log('Product already exist: ', find)
            return find
        }
    }

    async getAll(name: string): Promise<ProductApiB[]> {
        return this.productApiBModel.find({ name: name }).exec()
    }
}
