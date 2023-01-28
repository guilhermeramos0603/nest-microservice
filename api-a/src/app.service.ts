import { Injectable } from '@nestjs/common';
import { createMessageChannel } from './rabbitmq/rabbitmq.service';

@Injectable()
export class AppService {

  getHello(): string {
    return 'Hello World!';
  }
}
