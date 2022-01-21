import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { JoinGroupDto, LeaveGroupDto } from './dto';
import { ManageGroupsService } from './manage-groups.service';

@Resolver(() => User)
export class ManageGroupsResolver {
  constructor(private readonly manageGroupsService: ManageGroupsService) {}

  @Mutation(() => User)
  joinGroup(@Args('joinGroupDto') joinGroupDto: JoinGroupDto) {
    return this.manageGroupsService.join(joinGroupDto);
  }

  @Mutation(() => User)
  leaveGroup(@Args('leaveGroupDto') leaveGroupDto: LeaveGroupDto) {
    return this.manageGroupsService.leave(leaveGroupDto);
  }
}
