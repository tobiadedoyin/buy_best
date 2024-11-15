import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppDataSource } from 'src/config/data-source';

@Module({
  imports: [TypeOrmModule.forRoot(AppDataSource)],
})
export class AppModule {}
