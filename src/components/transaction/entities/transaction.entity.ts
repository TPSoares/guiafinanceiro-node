import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToOne } from 'typeorm';
import { UserEntity } from '../../user/entities/user.entity';
import { TransactionTypeEntity } from '../../transactionType/entities/transactionType.entity';
import { CategoryTypeEntity } from '../../categoryType/entities/categoryType.entity';

@Entity({name: "t_transaction"})
export class TransactionEntity {
  @PrimaryGeneratedColumn({name: "transaction_id"})
  transactionId: number;

  @ManyToOne(type => UserEntity, user => user.userId)
  @Column({name: "user_id"})
  user: UserEntity;

  @OneToOne(type => TransactionTypeEntity, transactionType => transactionType.transactionTypeId)
  @Column({name: "user_id"})
  transactionType: TransactionTypeEntity;

  @OneToOne(type => CategoryTypeEntity, categoryType => categoryType.categoryTypeId)
  @Column({name: "user_id"})
  categoryType: CategoryTypeEntity;

  @Column({name: "name"})
  name: string;

  @Column({name: "transaction_value"})
  transactionValue: string;

  @Column({name: "transaction_date"})
  transactionDate: Date;

  @Column({name: "created_at"})
  createdAt: Date;

  @Column({name: "updated_at"})
  updatedAt: Date;

  @Column({name: "enabled", default: true})
  enabled: boolean;
}
