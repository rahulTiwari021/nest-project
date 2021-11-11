import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { LoggerMiddleware } from './logger.middleware';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  //const logger = new LoggerMiddleware
  //app.use(LoggerMiddleware)
  await app.listen(3000);
}
bootstrap();
