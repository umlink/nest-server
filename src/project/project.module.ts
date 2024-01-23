import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ProjectController } from './controller/project';
import { ProjectService } from './service/project';
import { ProjectMiddleware } from './middleware/project';

@Module({
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(ProjectMiddleware).forRoutes(ProjectController);
  }
}
