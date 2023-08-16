import { Module, ValidationPipe } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { CategoryModule } from './category/category.module';
import { MongooseModule } from '@nestjs/mongoose';
// import { GrpcModule } from './grpc/grpc.module';
import { ProductModule } from './product/product.module';
import { APP_PIPE } from '@nestjs/core';
import { BrandModule } from './brand/brand.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CategoryModule,
    MongooseModule.forRoot('mongodb://localhost:27017', {
      dbName: 'products',
      auth: {
        password: process.env.DATABASE_USERNAME,
        username: process.env.DATABASE_PASSWORD,
      },
    }),
    // GrpcModule,
    ProductModule,
    BrandModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
