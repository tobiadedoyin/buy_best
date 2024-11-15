import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'src/config/data-source';
import { UsersModule } from './modules/users/users.modules';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource), UsersModule],
})
export class AppModule {}
