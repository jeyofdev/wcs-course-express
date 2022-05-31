import { MaxLength, MinLength } from 'class-validator';
import { ArgsType, Field } from 'type-graphql';
import Skill from '../models/skill.model';

@ArgsType()
class WilderCreateInput {
  @Field(() => String)
  @MinLength(3, {
    message: 'The wilder name must be longer than or equal to 3 characters',
  })
  @MaxLength(20, {
    message: 'The wilder name must be shorter than or equal to 20 characters',
  })
  name: string;

  @Field(() => String)
  @MinLength(3, {
    message: 'The wilder name must be longer than or equal to 3 characters',
  })
  @MaxLength(20, {
    message: 'The wilder name must be shorter than or equal to 20 characters',
  })
  city: string;

  @Field(() => [Skill])
  skills: Skill[];
}

export default WilderCreateInput;
