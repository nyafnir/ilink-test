import { Field, ObjectType } from '@nestjs/graphql';
import { Group } from '../../groups/schemas/group.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
@ObjectType()
export class User {
  @Field(() => String)
  _id: string;

  @Prop(String)
  @Field()
  firstname: string;

  @Prop(String)
  @Field()
  surname: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  @Field(() => [User])
  friends: User[];

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'Group' }] })
  @Field(() => [Group])
  groups: Group[];
}

export const UserSchema = SchemaFactory.createForClass(User);
