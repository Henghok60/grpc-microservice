/* eslint-disable */
import { GrpcMethod, GrpcStreamMethod } from "@nestjs/microservices";
import { Observable } from "rxjs";

export const protobufPackage = "product";

export interface Product {
  name: string;
  price: number;
  qty: number;
  desc: string;
  /** Assuming categoryId is a string representation of an ObjectId */
  categoryId: string;
  /** Assuming brandId is a string representation of an ObjectId */
  brandId: string;
  imageId: number;
}

export interface Category {
  name: string;
  imageId: number;
}

export interface FindById {
  id: string;
}

export const PRODUCT_PACKAGE_NAME = "product";

export interface ProductServiceClient {
  findProductById(request: FindById): Observable<Product>;

  findCategoryById(request: FindById): Observable<Category>;
}

export interface ProductServiceController {
  findProductById(request: FindById): Promise<Product> | Observable<Product> | Product;

  findCategoryById(request: FindById): Promise<Category> | Observable<Category> | Category;
}

export function ProductServiceControllerMethods() {
  return function (constructor: Function) {
    const grpcMethods: string[] = ["findProductById", "findCategoryById"];
    for (const method of grpcMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
    const grpcStreamMethods: string[] = [];
    for (const method of grpcStreamMethods) {
      const descriptor: any = Reflect.getOwnPropertyDescriptor(constructor.prototype, method);
      GrpcStreamMethod("ProductService", method)(constructor.prototype[method], method, descriptor);
    }
  };
}

export const PRODUCT_SERVICE_NAME = "ProductService";
