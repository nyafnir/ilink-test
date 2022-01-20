import { Group } from 'src/groups/entities/group.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
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

  @ManyToMany(() => User)
  @JoinTable({ name: 'user_friends', joinColumn: { name: 'friend_id' } })
  friends: User[];

  @ManyToMany(() => Group, (group) => group.users, {
    eager: true,
  })
  @JoinTable({ name: 'user_groups' })
  groups: Group[];
}
