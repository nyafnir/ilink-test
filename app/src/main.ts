import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { config as loadEnvFile } from 'dotenv';

loadEnvFile({ path: '../.env' });

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.SERVER_PORT);
}
bootstrap();
