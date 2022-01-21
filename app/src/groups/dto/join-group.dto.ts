import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JoinGroupDto {
  @Field()
  user_id: number;
  @Field()
  group_id: number;
}
