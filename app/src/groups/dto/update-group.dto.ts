import { CreateGroupDto } from './create-group.dto';
import { PartialType, InputType } from '@nestjs/graphql';

@InputType()
export class UpdateGroupDto extends PartialType(CreateGroupDto) {}
