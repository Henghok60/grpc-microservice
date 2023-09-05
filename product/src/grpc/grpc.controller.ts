import { Controller } from '@nestjs/common';
import { GrpcMethod, MessagePattern, Payload } from '@nestjs/microservices';
import {
  ProductServiceController,
  Category,
  FindById,
  PRODUCT_SERVICE_NAME,
  ProductServiceControllerMethods,
} from 'src/proto/product';
import { Observable } from 'rxjs';
import { ProductService } from 'src/product/product.service';
import { CategoryService } from 'src/category/category.service';

@Controller()
@ProductServiceControllerMethods()
export class GrpcController implements ProductServiceController {
  constructor(
    private productService: ProductService,
    private categoryService: CategoryService,
  ) {}
  findProductById(request: FindById): any {
    return this.productService.findOne(request.id);
  }

  // @GrpcMethod(PRODUCT_SERVICE_NAME, 'findCategoryById')
  findCategoryById(
    request: FindById,
  ): Category | Observable<Category> | Promise<Category> {
    return this.categoryService.findOne(request.id);
  }
}
