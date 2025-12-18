import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // strips unknown properties
      forbidNonWhitelisted: true, // throw error for extra properties
      transform: true, // automatically transform payloads to DTO classes
    }),
  );

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
