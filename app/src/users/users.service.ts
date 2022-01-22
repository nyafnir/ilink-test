import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User, UserDocument } from './schemas/user.schema';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name)
    private userModel: Model<UserDocument>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const entity = new this.userModel(createUserDto);
    return await entity.save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findOne(_id: string) {
    return await this.userModel.findById(_id).exec();
  }

  async update(_id: string, updateUserDto: UpdateUserDto) {
    return await this.userModel.findByIdAndUpdate(_id, updateUserDto).exec();
  }

  async remove(_id: string) {
    return await this.userModel.findByIdAndDelete(_id).exec();
  }
}
