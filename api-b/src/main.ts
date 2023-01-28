import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import ReadMessageChannel from './rabbitmq/rabbitmq.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2001);
  const msgChannel = new ReadMessageChannel()
  msgChannel.consumeMessages()
}
bootstrap();
