import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class JoinGroupDto {
  @Field()
  user_id: string;
  @Field()
  group_id: string;
}
