import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { injectSwagger } from './utils/swagger';
import { FuncLogger } from './middleware/logger2';
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  injectSwagger(app);
  app.use(FuncLogger); // 全局中间件使用方式
  await app.listen(7001, '0.0.0.0');
}
bootstrap().then(() => console.log('server start at:7001'));
