import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity({name: "t_user"})
export class UserEntity {
  @PrimaryGeneratedColumn({name: "user_id"})
  id: number;

  @Column({name: "name"})
  name: string;

  @Column({name: "password"})
  password: string;

  @Column({name: "email"})
  email: string;

  @Column({name: "created_at"})
  createdAt: Date;

  @Column({name: "updated_at"})
  updatedAt: Date;

  @Column({name: "enabled", default: true})
  enabled: boolean;
}
