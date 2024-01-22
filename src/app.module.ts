import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project';
import { ProjectService } from './service/project';
import { databaseProviders } from './database.provider';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [...databaseProviders, ProjectService],
  exports: [...databaseProviders],
})
export class AppModule {}
