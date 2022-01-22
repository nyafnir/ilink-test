import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class AddFriendDto {
  @Field()
  user_id: string;
  @Field()
  friend_id: string;
}
