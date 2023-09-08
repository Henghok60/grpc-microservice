import { IsOptional, IsString, IsUUID } from 'class-validator';

export class CreateBrandDto {
  @IsString()
  name: string;

  @IsOptional()
  @IsUUID()
  imageId: string;
}
