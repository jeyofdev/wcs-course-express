import { ArgsType, Field } from 'type-graphql';
import Skill from '../models/Skill.model';

@ArgsType()
class WilderCreateInput {
  @Field(() => String)
  name: string;

  @Field(() => String)
  city: string;

  @Field(() => [Skill])
  skills: Skill[];
}

export default WilderCreateInput;
