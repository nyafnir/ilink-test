import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { GroupsModule } from './groups/groups.module';
import { FriendsModule } from './friends/friends.module';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';

const isDevelopmentMode = process.env.NODE_ENV !== 'prod';

@Module({
  imports: [
    MongooseModule.forRoot(
      `mongodb://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}` +
        `@${process.env.DATABASE_HOST}:${process.env.DATABASE_PORT}` +
        `/${process.env.DATABASE_NAME}`,
      {
        autoIndex: true,
        authSource: 'admin',
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    ),
    GraphQLModule.forRoot({
      debug: isDevelopmentMode,
      playground: isDevelopmentMode,
      autoSchemaFile: true,
      sortSchema: true,
    }),
    UsersModule,
    GroupsModule,
    FriendsModule,
  ],
})
export class AppModule {}
