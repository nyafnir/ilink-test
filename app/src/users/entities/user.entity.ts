import { UserFriend } from 'src/user-friends/entities/user-friend.entity';
import { Entity, Column, PrimaryGeneratedColumn, OneToMany } from 'typeorm';

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
}
