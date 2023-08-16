import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';
import { Brand } from 'src/brand/schema/brand.schema';
import { Category } from 'src/category/schema/category.schema';

export type ProductDocument = HydratedDocument<Product>;

@Schema()
export class Product {
  @Prop()
  name: string;

  @Prop()
  price: number;

  @Prop()
  qty: number;

  @Prop()
  desc: number;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Category.name })
  categoryId: Category;

  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: Brand.name })
  brandId: Brand;

  @Prop()
  imageId: number;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
