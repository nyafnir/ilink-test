import { Controller, Post, Body, Delete } from '@nestjs/common';
import { ManageGroupsService } from './manage-groups.service';
import { JoinGroupDto, LeaveGroupDto } from './dto';

@Controller('groups/manage')
export class ManageGroupsController {
  constructor(private readonly manageGroupsService: ManageGroupsService) {}

  @Post('join')
  join(@Body() joinGroupDto: JoinGroupDto) {
    return this.manageGroupsService.join(joinGroupDto);
  }

  @Delete('leave')
  leave(@Body() leaveGroupDto: LeaveGroupDto) {
    return this.manageGroupsService.leave(leaveGroupDto);
  }
}
