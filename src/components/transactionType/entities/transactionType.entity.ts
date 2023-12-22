import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "t_transaction_type"})
export class TransactionTypeEntity {
  @PrimaryGeneratedColumn({name: "transaction_type_id"})
  transactionTypeId: number;

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
