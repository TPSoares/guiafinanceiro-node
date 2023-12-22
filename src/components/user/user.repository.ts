import { UserEntity } from './entities/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserRepository {
  constructor(
    @InjectRepository(UserEntity)
    private usersRepository: Repository<UserEntity>,
  ) {}

  findAll(): Promise<UserEntity[]> {
    return this.usersRepository.find();
  }

  findOne(userId: number): Promise<UserEntity | null> {
    return this.usersRepository.findOneBy({ userId });
  }

  async remove(id: number): Promise<void> {
    await this.usersRepository.delete(id);
  }

}
