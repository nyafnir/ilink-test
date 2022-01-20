import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersModule } from 'src/users/users.module';
import { Group } from './entities/group.entity';
import { GroupsController } from './groups.controller';
import { GroupsService } from './groups.service';
import { ManageGroupsController } from './manage-groups.controller';
import { ManageGroupsService } from './manage-groups.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Group]),
    TypeOrmModule.forFeature([User]),
    UsersModule,
  ],
  providers: [GroupsService, ManageGroupsService],
  controllers: [GroupsController, ManageGroupsController],
})
export class GroupsModule {}
