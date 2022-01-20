import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserFriendDto } from './dto/create-user-friend.dto';
import { UserFriend } from './entities/user-friend.entity';

@Injectable()
export class UserFriendsService {
  constructor(
    @InjectRepository(UserFriend)
    private userFriendsRepository: Repository<UserFriend>,
  ) {}

  async create(createUserFriendDto: CreateUserFriendDto) {
    const entity = this.userFriendsRepository.create(createUserFriendDto);
    return await this.userFriendsRepository.save(entity);
  }

  async findAll(): Promise<UserFriend[]> {
    return await this.userFriendsRepository.find();
  }

  async findOne(id: number): Promise<UserFriend> {
    return await this.userFriendsRepository.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.userFriendsRepository.delete(id);
  }
}
