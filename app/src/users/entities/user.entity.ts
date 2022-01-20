import { Group } from 'src/groups/entities/group.entity';
import { UserFriend } from 'src/user-friends/entities/user-friend.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  firstname: string;

  @Column()
  surname: string;

  @OneToMany(() => UserFriend, (user_friend) => user_friend.user, {
    eager: true,
  })
  friends: UserFriend[];

  @ManyToMany(() => Group, (group) => group.users, {
    eager: true,
  })
  @JoinTable({ name: 'user_groups' })
  groups: Group[];
}
