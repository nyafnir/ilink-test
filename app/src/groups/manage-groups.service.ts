import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { User, UserDocument } from 'src/users/schemas/user.schema';
import { JoinGroupDto, LeaveGroupDto } from './dto';
import { Group, GroupDocument } from './schemas/group.schema';

@Injectable()
export class ManageGroupsService {
  constructor(
    @InjectModel(Group.name)
    private groupModel: Model<GroupDocument>,
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async join(joinGroupDto: JoinGroupDto) {
    const group = await this.groupModel.findById(joinGroupDto.group_id).exec();
    const user = await this.userModel.findById(joinGroupDto.user_id).exec();

    group.users.push(user);
    user.groups.push(group);

    await group.save();
    return await user.save();
  }

  async leave(leaveGroupDto: LeaveGroupDto) {
    const group = await this.groupModel.findById(leaveGroupDto.group_id).exec();
    const user = await this.userModel.findById(leaveGroupDto.user_id).exec();

    const userIndex = group.users.indexOf(user._id);
    group.users.splice(userIndex, 1);

    const groupIndex = user.groups.indexOf(group._id);
    user.groups.splice(groupIndex, 1);

    await group.save();
    return await user.save();
  }
}
