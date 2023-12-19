import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';
import { UserGateway } from './user.gateway';

@Injectable()
export class UserService {
  constructor(
    private userGateway: UserGateway,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.userGateway.findAll();
  }

  findOne(id: number): Promise<UserEntity | null> {
    return this.userGateway.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userGateway.remove(id);
  }
}
