import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateGroupDto, UpdateGroupDto } from './dto';
import { Group } from './schemas/group.schema';
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
  findOneGroup(@Args('_id', { type: () => String }) _id: string) {
    return this.groupsService.findOne(_id);
  }

  @Mutation(() => Group)
  updateGroup(
    @Args('_id', { type: () => String }) _id: string,
    @Args('updateGroupDto') updateGroupDto: UpdateGroupDto,
  ) {
    return this.groupsService.update(_id, { ...updateGroupDto });
  }

  @Mutation(() => Group)
  removeGroup(@Args('_id', { type: () => String }) _id: string) {
    return this.groupsService.remove(_id);
  }
}
