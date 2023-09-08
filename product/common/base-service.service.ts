import { Document, Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BaseService<T extends Document> {
  constructor(@InjectModel('model') private readonly model: Model<T>) {}

  async findAll(): Promise<T[]> {
    return await this.model.find();
  }
  findOne(id: string): Promise<T> {
    return this.model.findById(id);
  }
  create(body: any): Promise<any> {
    return this.model.create(body);
  }
  update(id: string, body: any): Promise<T> {
    return this.model.findByIdAndUpdate(id, body);
  }
  remove(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id);
  }
}
