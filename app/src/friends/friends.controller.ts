import { Controller, Post, Body, Delete } from '@nestjs/common';
import { AddFriendDto, RemoveFriendDto } from './dto';
import { FriendsService } from './friends.service';

@Controller('friends')
export class FriendsController {
  constructor(private readonly friendsService: FriendsService) {}

  @Post()
  create(@Body() addFriendDto: AddFriendDto) {
    return this.friendsService.add(addFriendDto);
  }

  @Delete()
  remove(@Body() removeFriendDto: RemoveFriendDto) {
    return this.friendsService.remove(removeFriendDto);
  }
}
