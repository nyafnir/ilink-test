import { JoinGroupDto } from '.';
import { InputType } from '@nestjs/graphql';

@InputType()
export class LeaveGroupDto extends JoinGroupDto {}
