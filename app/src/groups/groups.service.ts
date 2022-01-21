import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group } from './entities/group.entity';

@Injectable()
export class GroupsService {
  constructor(
    @InjectRepository(Group)
    private groupsRepository: Repository<Group>,
  ) {}

  async create(createGroupDto: CreateGroupDto) {
    const entity = this.groupsRepository.create(createGroupDto);
    return await this.groupsRepository.save(entity);
  }

  async findAll() {
    return await this.groupsRepository.find();
  }

  async findOne(id: number) {
    return await this.groupsRepository.findOneOrFail(id);
  }

  async update(id: number, updateGroupDto: UpdateGroupDto) {
    return await this.groupsRepository.update(id, updateGroupDto);
  }

  async remove(id: number) {
    await this.groupsRepository.delete(id);
  }
}
