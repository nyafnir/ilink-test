import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group } from './entities/group.entity';
import { GroupsService } from './groups.service';

@Resolver(() => Group)
export class GroupsResolver {
  constructor(private readonly groupsService: GroupsService) {}

  @Mutation(() => Group)
  createGroup(@Args('createGroupDto') createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  @Query(() => [Group], { name: 'groups' })
  findAllGroups() {
    return this.groupsService.findAll();
  }

  @Query(() => Group, { name: 'group' })
  findOneGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.findOne(id);
  }

  @Mutation(() => Group)
  updateGroup(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateGroupDto') updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupsService.update(id, updateGroupDto);
  }

  @Mutation(() => Group)
  removeGroup(@Args('id', { type: () => Int }) id: number) {
    return this.groupsService.remove(id);
  }
}
