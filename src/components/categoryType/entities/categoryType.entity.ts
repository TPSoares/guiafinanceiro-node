import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "t_category_type"})
export class CategoryTypeEntity {
  @PrimaryGeneratedColumn({name: "category_type_id"})
  categoryTypeId: number;

  @Column({name: "name"})
  name: string;

  @Column({name: "description"})
  description: string;

  @Column({name: "created_at"})
  createdAt: Date;

  @Column({name: "updated_at"})
  updatedAt: Date;

  @Column({name: "enabled", default: true})
  enabled: boolean;
}
