import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group, GroupDocument } from './schemas/group.schema';

@Injectable()
export class GroupsService {
  constructor(
    @InjectModel(Group.name)
    private groupModel: Model<GroupDocument>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const entity = new this.groupModel(createGroupDto);
    return await entity.save();
  }

  async findAll() {
    return await this.groupModel.find().exec();
  }

  async findOne(_id: string) {
    return await this.groupModel.findById(_id).exec();
  }

  async update(_id: string, updateGroupDto: UpdateGroupDto) {
    return await this.groupModel.findByIdAndUpdate(_id, updateGroupDto).exec();
  }

  async remove(_id: string) {
    return await this.groupModel.findByIdAndDelete(_id).exec();
  }
}
