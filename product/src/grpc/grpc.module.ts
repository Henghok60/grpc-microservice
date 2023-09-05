import { Module } from '@nestjs/common';
// import { GrpcService } from './grpc.service';
import { GrpcController } from './grpc.controller';
import { ProductService } from 'src/product/product.service';
import { CategoryService } from 'src/category/category.service';
import { ProductModule } from 'src/product/product.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  controllers: [GrpcController],
  imports: [ProductModule, CategoryModule],
  // providers: [ProductService, CategoryService],
})
export class GrpcModule {}
