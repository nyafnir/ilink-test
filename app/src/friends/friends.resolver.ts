import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { AddFriendDto, RemoveFriendDto } from './dto';
import { FriendsService } from './friends.service';

@Resolver(() => User)
export class FriendsResolver {
  constructor(private readonly friendsService: FriendsService) {}

  @Mutation(() => User)
  addFriend(@Args('addFriendDto') addFriendDto: AddFriendDto) {
    return this.friendsService.add(addFriendDto);
  }

  @Mutation(() => User)
  removeFriend(@Args('removeFriendDto') removeFriendDto: RemoveFriendDto) {
    return this.friendsService.remove(removeFriendDto);
  }
}
