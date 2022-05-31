import { prop as Property, getModelForClass } from '@typegoose/typegoose';
import { ObjectId } from 'mongodb';
import { Field, ObjectType } from 'type-graphql';
import ObjectIdScalar from '../scalars/objectId.scalar';
import Skill from './Skill.model';

@ObjectType({ description: 'Model for the wilders' })
export class Wilder {
  @Field(() => ObjectIdScalar, {
    description: 'ObjectId for each wilder in mongoDb',
    defaultValue: new ObjectId(),
  })
  readonly _id?: ObjectId;

  @Field(() => String, { description: 'Name of the wilder' })
  @Property({ unique: true, required: [true, 'The name is required!'] })
  name: string;

  @Field(() => String, { description: 'City of the wilder' })
  @Property({ required: [true, 'The city is required!'] })
  city: string;

  @Field(() => [Skill], { description: 'Skills list of the wilder' })
  @Property({ required: [true, 'The skills list is required!'] })
  skills: Skill[];
}

export default getModelForClass(Wilder, {
  schemaOptions: { versionKey: false },
});
