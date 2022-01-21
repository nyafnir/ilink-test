import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddFriendDto {
  @Field()
  user_id: number;
  @Field()
  friend_id: number;
}
