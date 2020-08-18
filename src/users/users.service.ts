import { Injectable, Inject } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './user.model';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private usersRepository: typeof User) {}

    async findAll(): Promise<User[]> {
      return this.usersRepository.findAll();
    }

    create(createUserDto: CreateUserDto): Promise<User> {
      const user = new User();
      user.firstName = createUserDto.firstName;
      user.lastName = createUserDto.lastName;
  
      return user.save();
    }

    findOne(id: string): Promise<User> {
      return this.usersRepository.findOne({
        where: {
          id,
        },
      });
    }

    async remove(id: string): Promise<void> {
      const user = await this.findOne(id);
      await user.destroy();
    }
}
