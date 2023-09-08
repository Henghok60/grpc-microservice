import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type brandDocument = HydratedDocument<Brand>;

@Schema()
export class Brand {
  @Prop()
  name: string;

  @Prop()
  imageId: string;
}

export const brandSchema = SchemaFactory.createForClass(Brand);
