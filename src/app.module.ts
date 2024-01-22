import { Module } from '@nestjs/common';
import { ProjectController } from './controller/project';
import { ProjectService } from './service/project';

@Module({
  imports: [],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class AppModule {}
