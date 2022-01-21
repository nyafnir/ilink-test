import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { User } from 'src/users/entities/user.entity';
import { FriendsResolver } from './friends.resolver';

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  providers: [FriendsService, FriendsResolver],
  controllers: [FriendsController],
})
export class FriendsModule {}
