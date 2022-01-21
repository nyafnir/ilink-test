import { CreateUserDto } from './';
import { InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserDto extends PartialType(CreateUserDto) {}
