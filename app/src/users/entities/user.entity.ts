import { Field, ObjectType } from '@nestjs/graphql';
import { Group } from 'src/groups/entities/group.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field()
  id: number;

  @Column()
  @Field()
  firstname: string;

  @Column()
  @Field()
  surname: string;

  @ManyToMany(() => User)
  @JoinTable({ name: 'user_friends', joinColumn: { name: 'friend_id' } })
  @Field(() => [User])
  friends: User[];

  @ManyToMany(() => Group, (group) => group.users, {
    eager: true,
  })
  @JoinTable({ name: 'user_groups' })
  @Field(() => [Group])
  groups: Group[];
}
