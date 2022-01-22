import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './schemas/user.schema';
import { UsersService } from './users.service';

@Resolver(() => User)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => User)
  createUser(@Args('createUserDto') createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Query(() => [User], { name: 'users' })
  findAllUsers() {
    return this.usersService.findAll();
  }

  @Query(() => User, { name: 'user' })
  findOneUser(@Args('_id', { type: () => String }) _id: string) {
    return this.usersService.findOne(_id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('_id', { type: () => String }) _id: string,
    @Args('updateUserDto') updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(_id, { ...updateUserDto });
  }

  @Mutation(() => User)
  removeUser(@Args('_id', { type: () => String }) _id: string) {
    return this.usersService.remove(_id);
  }
}
