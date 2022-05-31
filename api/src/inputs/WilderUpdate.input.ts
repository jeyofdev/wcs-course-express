import { Field, ArgsType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';
import ObjectIdScalar from '../scalars/objectId.scalar';
import Skill from '../models/Skill.model';

@ArgsType()
class WilderUpdateInput {
  @Field(() => ObjectIdScalar)
  readonly id!: string;

  @Field(() => String, { nullable: true })
  @MinLength(3)
  @MaxLength(20)
  name?: string;

  @Field(() => String, { nullable: true })
  @MinLength(3)
  @MaxLength(20)
  city?: string;

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}

export default WilderUpdateInput;
