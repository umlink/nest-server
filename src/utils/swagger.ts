import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export const injectSwagger = (app: INestApplication<any>) => {
  const config = new DocumentBuilder()
    .setTitle('nestjs server API')
    .setDescription('nestjs demo server API description')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
};
