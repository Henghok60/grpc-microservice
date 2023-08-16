import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Model, Types } from 'mongoose';
import { Product, ProductDocument } from './schema/product.model';
import { BaseService } from 'src/common/base-service.service';

@Injectable()
export class ProductService extends BaseService<ProductDocument> {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {
    super(productModel);
  }

  findAll(): Promise<
    (Document<unknown, Product> & Product & { _id: Types.ObjectId })[]
  > {
    return this.productModel.find().populate(['categoryId', 'brandId']);
  }

  findOne(
    id: string,
  ): Promise<Document<unknown, Product> & Product & { _id: Types.ObjectId }> {
    return this.productModel.findById(id).populate('categoryId').exec();
  }
}
