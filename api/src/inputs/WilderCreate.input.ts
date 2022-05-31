import { MaxLength, MinLength } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';
import Skill from '../models/skill.model';

@ArgsType()
class WilderCreateInput {
  @Field(() => String)
  @MinLength(3)
  @MaxLength(20)
  name: string;

  @Field(() => String)
  @MinLength(3)
  @MaxLength(20)
  city: string;

  @Field(() => [Skill])
  skills: Skill[];
}

export default WilderCreateInput;
