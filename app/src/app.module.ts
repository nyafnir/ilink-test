import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupsModule } from './groups/groups.module';
import { UsersModule } from './users/users.module';
import { FriendsModule } from './friends/friends.module';
import { GraphQLModule } from '@nestjs/graphql';

const isDevelopmentMode = process.env.NODE_ENV !== 'prod';

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
      synchronize: isDevelopmentMode,
      logging: isDevelopmentMode,
    }),
    GraphQLModule.forRoot({
      debug: isDevelopmentMode,
      playground: isDevelopmentMode,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    GroupsModule,
    UsersModule,
    FriendsModule,
  ],
})
export class AppModule {}
