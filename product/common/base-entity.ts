import { Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class BaseEntityPG {
  @PrimaryGeneratedColumn()
  id: number;
}
