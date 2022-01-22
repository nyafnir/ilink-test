import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto, UpdateGroupDto } from './dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':_id')
  findOne(@Param('_id') _id: string) {
    return this.groupsService.findOne(_id);
  }

  @Patch(':_id')
  update(@Param('_id') _id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(_id, updateGroupDto);
  }

  @Delete(':_id')
  remove(@Param('_id') _id: string) {
    return this.groupsService.remove(_id);
  }
}
