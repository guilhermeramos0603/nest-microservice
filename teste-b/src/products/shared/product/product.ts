import { Document } from "mongoose"

export class ProductApiB extends Document {
    name: string
    description: string
    value: number
}
