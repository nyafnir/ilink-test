import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Repository } from 'typeorm';
import { JoinGroupDto, LeaveGroupDto } from './dto';
import { Group } from './entities/group.entity';

@Injectable()
export class ManageGroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async join(joinGroupDto: JoinGroupDto) {
    const group = await this.groupsRepository.findOne(joinGroupDto.group_id);
    const user = await this.usersRepository.findOne(joinGroupDto.user_id);

    if (user.groups == null) {
      user.groups = [group];
    } else {
      user.groups.push(group);
    }

    return await this.usersRepository.save(user);
  }

  async leave(leaveGroupDto: LeaveGroupDto) {
    const user = await this.usersRepository.findOne(leaveGroupDto.user_id);

    user.groups = user.groups.filter(
      (group) => group.id !== leaveGroupDto.group_id,
    );

    return await this.usersRepository.save(user);
  }
}
