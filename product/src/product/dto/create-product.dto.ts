import {
  IsString,
  IsNumber,
  IsNotEmpty,
  IsOptional,
  IsMongoId,
} from 'class-validator';

export class CreateProductDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsNumber()
  price: number;

  @IsNotEmpty()
  @IsNumber()
  qty: number;

  @IsOptional()
  @IsString()
  desc: string;

  @IsOptional()
  @IsMongoId()
  categoryId: number;

  @IsOptional()
  @IsMongoId()
  brandId: number;

  @IsOptional()
  @IsNumber()
  imageId: number;
}
