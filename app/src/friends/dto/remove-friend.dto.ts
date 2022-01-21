import { InputType } from '@nestjs/graphql';
import { AddFriendDto } from '.';

@InputType()
export class RemoveFriendDto extends AddFriendDto {}
