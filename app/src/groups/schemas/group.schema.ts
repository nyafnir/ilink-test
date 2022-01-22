import { Field, ObjectType } from '@nestjs/graphql';
import { User } from '../../users/schemas/user.schema';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

export type GroupDocument = Group & Document;

@Schema()
@ObjectType()
export class Group {
  @Field(() => String)
  _id: string;

  @Prop(String)
  @Field()
  name: string;

  @Prop({ type: [{ type: MongooseSchema.Types.ObjectId, ref: 'User' }] })
  @Field(() => [User])
  users: User[];
}

export const GroupSchema = SchemaFactory.createForClass(Group);
