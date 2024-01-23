import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { databaseProviders } from './database.provider';
import { ProjectModule } from './project/project.module';
import { UserModule } from './user/user.module';
import { LoggerMiddleware } from './middleware/logger';

@Module({
  imports: [ProjectModule, UserModule],
  controllers: [],
  providers: [...databaseProviders],
  exports: [...databaseProviders],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
