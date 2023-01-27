import { Document } from "mongoose"

export class ProductApiA extends Document {
    name: string
    description: string
    value: number
}
