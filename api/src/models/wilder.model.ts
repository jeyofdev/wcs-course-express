import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import ObjectIdScalar from '../scalars/objectId.scalar';
import Skill from './Skill.model';

@ObjectType()
export class Wilder {
  @Field(() => ObjectIdScalar, { defaultValue: new ObjectId() })
  readonly _id?: ObjectId;

  @Field(() => String)
  @Property({ unique: true, required: [true, 'The name is required!'] })
  name: string;

  @Field(() => String)
  @Property({ required: [true, 'The city is required!'] })
  city: string;

  @Field(() => [Skill])
  @Property({ required: [true, 'La liste des skills est requise!'] })
  skills: Skill[];
}

export default getModelForClass(Wilder, {
  schemaOptions: { versionKey: false },
});
