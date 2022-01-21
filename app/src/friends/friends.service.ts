import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { AddFriendDto, RemoveFriendDto } from './dto';

@Injectable()
export class FriendsService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async add(addFriendDto: AddFriendDto) {
    const user = await this.usersRepository.findOneOrFail(
      addFriendDto.user_id,
      { relations: ['friends'] },
    );
    const friend = await this.usersRepository.findOneOrFail(
      addFriendDto.friend_id,
    );

    if (user.friends == null) {
      user.friends = [friend];
    } else {
      user.friends.push(friend);
    }

    return await this.usersRepository.save(user);
  }

  async remove(removeFriendDto: RemoveFriendDto) {
    const user = await this.usersRepository.findOneOrFail(
      removeFriendDto.user_id,
      { relations: ['friends'] },
    );

    user.friends = user.friends.filter(
      (friend) => friend.id !== removeFriendDto.friend_id,
    );

    return await this.usersRepository.save(user);
  }
}
