import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { DatabaseModule } from '../database/database.module';
import { usersProvider } from './users.provider';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProvider],
  controllers: [UsersController],
})
export class UsersModule {}
