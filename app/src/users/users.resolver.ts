import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';
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
  findOneUser(@Args('id', { type: () => Number }) id: number) {
    return this.usersService.findOne(id);
  }

  @Mutation(() => User)
  updateUser(
    @Args('id', { type: () => Number }) id: number,
    @Args('updateUserDto') updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(id, updateUserDto);
  }

  @Mutation(() => User)
  removeUser(@Args('id', { type: () => Number }) id: number) {
    return this.usersService.remove(id);
  }
}
