import { Channel, connect } from "amqplib";
import { config } from "dotenv";
import { ProductApiBService } from "src/products/shared/product.service/product.service";
import { ProductApiB } from "src/products/shared/product/product";

config()

export default class ReadMessageChannel {
    private _channel: Channel
    private _service: ProductApiBService

    private async _createMessageChannel() {
        try {
            const connection = await connect(process.env.AMQP_SERVER)
            this._channel = await connection.createChannel()
            this._channel.assertQueue(process.env.QUEUE_NAME)
            console.log('Connected to Queue.')
        }
        catch (err) {
            console.log('Connect to RabbitMQ queue failed.')
            console.log(err)
        }
    }

    async consumeMessages() {
        await this._createMessageChannel()
        if (this._channel) {
            this._channel.consume(process.env.QUEUE_NAME, async msg => {
                const obj = JSON.parse(msg.content.toString())
                this._channel.ack(msg)
                const product: ProductApiB = obj

                this._service.dataReceived(product)
            })
            console.log('Product consumer started')
        }
    }
}