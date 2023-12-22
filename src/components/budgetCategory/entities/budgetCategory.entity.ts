import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { CategoryTypeEntity } from '../../categoryType/entities/categoryType.entity';
import { UserEntity } from '../../user/entities/user.entity';

@Entity({name: "t_budget_category"})
export class BudgetCategoryEntity {
  @PrimaryGeneratedColumn({name: "budget_category_id"})
  budgetCategoryId: number;


  @Column({name: "name"})
  name: string;

  @OneToOne(type => UserEntity, user => user.userId)
  @Column({name: "user_id"})
  user: UserEntity;

  @OneToOne(type => CategoryTypeEntity, categoryType => categoryType.categoryTypeId)
  @Column({name: "category_type_id"})
  categoryType: CategoryTypeEntity;

  @Column({name: "value"})
  value: string;

  @Column({name: "percentage"})
  percentage: string;

  @Column({name: "created_at"})
  createdAt: Date;

  @Column({name: "updated_at"})
  updatedAt: Date;

  @Column({name: "enabled", default: true})
  enabled: boolean;
}
