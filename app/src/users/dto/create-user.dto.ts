import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CreateUserDto {
  @Field()
  firstname: string;
  @Field()
  surname: string;
}
