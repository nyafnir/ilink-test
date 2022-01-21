import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Group } from './entities/group.entity';
import { GroupsController } from './groups.controller';
import { GroupsResolver } from './groups.resolver';
import { GroupsService } from './groups.service';
import { ManageGroupsController } from './manage-groups.controller';
import { ManageGroupsResolver } from './manage-groups.resolver';
import { ManageGroupsService } from './manage-groups.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    TypeOrmModule.forFeature([User]),
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
