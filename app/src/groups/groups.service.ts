import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult } from 'typeorm';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';
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
}
