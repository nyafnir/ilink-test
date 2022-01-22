import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { User, UserSchema } from 'src/users/schemas/user.schema';
import { GroupsController } from './groups.controller';
import { GroupsResolver } from './groups.resolver';
import { GroupsService } from './groups.service';
import { ManageGroupsController } from './manage-groups.controller';
import { ManageGroupsResolver } from './manage-groups.resolver';
import { ManageGroupsService } from './manage-groups.service';
import { Group, GroupSchema } from './schemas/group.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Group.name, schema: GroupSchema }]),
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    GroupsService,
    ManageGroupsService,
    GroupsResolver,
    ManageGroupsResolver,
  ],
  controllers: [GroupsController, ManageGroupsController],
})
export class GroupsModule {}
