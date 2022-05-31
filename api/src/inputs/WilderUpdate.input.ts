import { Field, ArgsType } from 'type-graphql';
import { MaxLength, MinLength } from 'class-validator';
import Skill from '../models/skill.model';

@ArgsType()
class WilderUpdateInput {
  @Field(() => String)
  readonly id!: string;

  @Field(() => String, { nullable: true })
  @MinLength(3, {
    message: 'The wilder name must be longer than or equal to 3 characters',
  })
  @MaxLength(20, {
    message: 'The wilder name must be shorter than or equal to 20 characters',
  })
  name?: string;

  @Field(() => String, { nullable: true })
  @MinLength(3, {
    message: 'The wilder name must be longer than or equal to 3 characters',
  })
  @MaxLength(20, {
    message: 'The wilder name must be shorter than or equal to 20 characters',
  })
  city?: string;

  @Field(() => [Skill], { nullable: true })
  skills?: Skill[];
}

export default WilderUpdateInput;
