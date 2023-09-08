import { Module } from '@nestjs/common';
// import { GrpcService } from './grpc.service';
import { GrpcController } from './grpc.controller';
import { ProductService } from '../product/product.service';
import { CategoryService } from '../category/category.service';
import { ProductModule } from '../product/product.module';
import { CategoryModule } from '../category/category.module';

@Module({
  controllers: [GrpcController],
  imports: [ProductModule, CategoryModule],
  // providers: [ProductService, CategoryService],
})
export class GrpcModule {}
