import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository, UpdateResult } from 'typeorm';
import {
  CreateGroupDto,
  UpdateGroupDto,
  JoinGroupDto,
  LeaveGroupDto,
} from './dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const entity = this.groupsRepository.create(createGroupDto);
    return await this.groupsRepository.save(entity);
  }

  async findAll(): Promise<Group[]> {
    return await this.groupsRepository.find();
  }

  async findOne(id: number): Promise<Group> {
    return await this.groupsRepository.findOne(id);
  }

  async update(
    id: number,
    updateGroupDto: UpdateGroupDto,
  ): Promise<UpdateResult> {
    return await this.groupsRepository.update(id, updateGroupDto);
  }

  async remove(id: number): Promise<void> {
    await this.groupsRepository.delete(id);
  }

  async join(joinGroupDto: JoinGroupDto) {
    const group = await this.groupsRepository.findOne(joinGroupDto.group_id);
    const user = await this.usersRepository.findOne(joinGroupDto.user_id);

    if (user.groups == null) {
      user.groups = [group];
    } else {
      user.groups.push(group);
    }

    await this.usersRepository.save(user);

    return user;
  }

  async leave(leaveGroupDto: LeaveGroupDto) {
    const group = await this.groupsRepository.findOne(leaveGroupDto.group_id);
    const user = await this.usersRepository.findOne(leaveGroupDto.user_id);

    user.groups = user.groups.filter(
      (group) => group.id !== leaveGroupDto.group_id,
    );

    await this.groupsRepository.save(group);
    await this.usersRepository.save(user);

    return user;
  }
}
