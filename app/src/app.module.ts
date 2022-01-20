import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { config as loadEnvFile } from 'dotenv';

loadEnvFile({ path: '../.env' });

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: process.env.DATABASE_TYPE as 'postgres' | 'mongodb',
      host: process.env.DATABASE_HOST,
      port: +process.env.DATABASE_PORT,
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      database: process.env.DATABASE_NAME,
      autoLoadEntities: true,
      synchronize: process.env.NODE_ENV !== 'prod',
      logging: process.env.NODE_ENV !== 'prod',
    }),
    GroupsModule,
    UsersModule,
  ],
})
export class AppModule {}
