import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FriendsService } from './friends.service';
import { FriendsController } from './friends.controller';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { FriendsResolver } from './friends.resolver';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [FriendsService, FriendsResolver],
  controllers: [FriendsController],
})
export class FriendsModule {}
