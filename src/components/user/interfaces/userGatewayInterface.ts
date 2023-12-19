import { UserEntity } from '../entities/user.entity';

export interface UserGatewayInterface {
  findAll(): Promise<UserEntity[]>;

  findOne(id: number): Promise<UserEntity | null>;

  remove(id: number): Promise<void>;
}
