import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDto, UpdateUserDto } from './dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const entity = this.usersRepository.create(createUserDto);
    return await this.usersRepository.save(entity);
  }

  async findAll() {
    return await this.usersRepository.find();
  }

  async findOne(id: number) {
    return await this.usersRepository.findOneOrFail(id, {
      relations: ['friends'],
    });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const result = await this.usersRepository.update(id, updateUserDto);
    return result.affected;
  }

  async remove(id: number) {
    const result = await this.usersRepository.delete(id);
    return result.affected;
  }
}
