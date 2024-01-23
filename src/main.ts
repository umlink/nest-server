import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { injectSwagger } from './utils/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  injectSwagger(app);
  await app.listen(7001, '0.0.0.0');
}
bootstrap().then(() => console.log('server start at:7001'));
