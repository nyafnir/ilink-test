import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { UserFriendsService } from './user-friends.service';
import { CreateUserFriendDto } from './dto/create-user-friend.dto';

@Controller('user_friends')
export class UserFriendsController {
  constructor(private readonly userFriendsService: UserFriendsService) {}

  @Post()
  create(@Body() createUserFriendDto: CreateUserFriendDto) {
    return this.userFriendsService.create(createUserFriendDto);
  }

  @Get()
  findAll() {
    return this.userFriendsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userFriendsService.findOne(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userFriendsService.remove(+id);
  }
}
