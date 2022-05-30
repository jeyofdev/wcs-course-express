import { Field, ObjectType, InputType, Int } from 'type-graphql';

@ObjectType()
@InputType('SkillInput')
class Skill {
  @Field(() => String)
  title!: string;

  @Field(() => Int)
  votes!: number;
}

export default Skill;
