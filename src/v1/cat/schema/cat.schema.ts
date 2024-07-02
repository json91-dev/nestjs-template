import { Document, SchemaOptions } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

const options: SchemaOptions = {
  timestamps: true,
  collection: 'cats',
};

@Schema(options)
export class Cat extends Document {
  @Prop()
  name: string;

  @Prop()
  age: number;

  @Prop()
  color: string;
}

const _CatSchema = SchemaFactory.createForClass(Cat);

export const CatSchema = _CatSchema;
