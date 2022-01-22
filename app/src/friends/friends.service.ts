import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { AddFriendDto, RemoveFriendDto } from './dto';
import { User, UserDocument } from 'src/users/schemas/user.schema';

@Injectable()
export class FriendsService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async add(addFriendDto: AddFriendDto) {
    const [user, friend] = await this.userModel
      .find({
        _id: {
          $in: [addFriendDto.user_id, addFriendDto.friend_id],
        },
      })
      .exec();

    friend.friends.push(user);
    user.friends.push(friend);

    await friend.save();
    return await user.save();
  }

  async remove(removeFriendDto: RemoveFriendDto) {
    const [user, friend] = await this.userModel
      .find({
        _id: {
          $in: [removeFriendDto.user_id, removeFriendDto.friend_id],
        },
      })
      .exec();

    const friendIndex = user.friends.indexOf(friend._id);
    user.friends.splice(friendIndex, 1);

    const userIndex = friend.friends.indexOf(user._id);
    friend.friends.splice(userIndex, 1);

    await user.save();
    return await friend.save();
  }
}
