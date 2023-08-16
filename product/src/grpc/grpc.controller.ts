import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import {
  ProductServiceControllerMethods,
  ProductServiceController,
  Category,
  FindById,
  Product,
} from 'src/proto/product';
import { Observable } from 'rxjs';

@ProductServiceControllerMethods()
@Controller()
export class GrpcController implements ProductServiceController {
  findProductById(
    request: FindById,
  ): Product | Observable<Product> | Promise<Product> {
    throw new Error('Method not implemented.');
  }
  findCategoryById(
    request: FindById,
  ): Category | Observable<Category> | Promise<Category> {
    throw new Error('Method not implemented.');
  }
}
