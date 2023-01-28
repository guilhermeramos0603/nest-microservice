import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createMessageChannel } from './rabbitmq/rabbitmq.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(2000);
  await createMessageChannel()
}
bootstrap();
