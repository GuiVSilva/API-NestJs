import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //valida apenas o que tem no DTO
      forbidNonWhitelisted: true,//lança erro
    }),
  );
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();