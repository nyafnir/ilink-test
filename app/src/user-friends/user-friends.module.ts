import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserFriendsService } from './user-friends.service';
import { UserFriendsController } from './user-friends.controller';
import { UserFriend } from './entities/user-friend.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserFriend])],
  controllers: [UserFriendsController],
  providers: [UserFriendsService],
})
export class UserFriendsModule {}
