import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(7001, '0.0.0.0');

}
bootstrap().then(r => console.log('server start at:7001'));
