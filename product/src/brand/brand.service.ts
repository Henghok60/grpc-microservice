import { Injectable } from '@nestjs/common';
import { BaseService } from 'src/common/base-service.service';
import { Brand, brandDocument } from './schema/brand.schema';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class BrandService extends BaseService<brandDocument> {
  constructor(
    @InjectModel(Brand.name) private readonly brandModel: Model<brandDocument>,
  ) {
    super(brandModel);
  }
}
