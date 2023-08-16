import { Type } from 'class-transformer';
import { IsInt, IsString } from 'class-validator';
import { Entity } from 'typeorm';

@Entity()
export class User {
  @IsString()
  name: string;

  @IsString()
  gender;

  @IsInt()
  @Type(() => Number)
  age: number;
}
