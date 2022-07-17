import { Field, ObjectType, InputType, Int, ID } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { SkillName } from '../enums/skillName.enum';

@ObjectType({ description: "Model for the wilder's skills" })
@Entity('skill')
@InputType('SkillInput')
class Skill {
  @PrimaryGeneratedColumn()
  @Field(() => ID)
  id!: Number;

  @Column('varchar')
  @Field(() => SkillName, { description: 'Name of the skill' })
  title!: SkillName;

  @Column('integer')
  @Field(() => Int, { description: 'Vote of the skill' })
  votes!: number;
}

export default Skill;
