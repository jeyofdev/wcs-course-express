import { Field, ArgsType } from 'type-graphql';
import ObjectIdScalar from '../scalars/objectId.scalar';
import Skill from '../models/Skill.model';

@ArgsType()
class WilderUpdateInput {
  @Field(() => ObjectIdScalar)
  readonly id!: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => String, { nullable: true })
  city?: string;

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}

export default WilderUpdateInput;
