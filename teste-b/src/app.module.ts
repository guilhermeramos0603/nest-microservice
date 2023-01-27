import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { config } from 'dotenv';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsApiBModule } from './products/products.module';

config()

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_CONNECTION_URL), ProductsApiBModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
