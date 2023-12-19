import { UserGatewayInterface } from './interfaces/userGatewayInterface';
import { UserEntity } from './entities/user.entity';
import { Injectable } from '@nestjs/common';
import { UserRepository } from './user.repository';

@Injectable()
export class UserGateway implements UserGatewayInterface {
  constructor(
    private usersRepository: UserRepository,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.findAll();
  }

  findOne(id: number): Promise<UserEntity | null> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.remove(id);
  }

}
