import { Field, ObjectType, InputType, Int, Directive } from 'type-graphql';
import { SkillName } from '../enums/skillName.enum';

@ObjectType({ description: "Model for the wilder's skills" })
@InputType('SkillInput')
class Skill {
  @Directive("@lowercase")
  @Field(() => SkillName, { description: 'Name of the skill' })
  title!: SkillName;

  @Field(() => Int, { description: 'Vote of the skill' })
  votes!: number;
}

export default Skill;
