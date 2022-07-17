import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import Skill from './skill.model';

@ObjectType({ description: 'Model for the wilders' })
@Entity('wilder')
export class Wilder extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID, {
    description: 'Id for each wilder',
  })
  id!: Number;

  @Column()
  @Field(() => String, { description: 'Name of the wilder' })
  name: string;

  @Column()
  @Field(() => String, { description: 'City of the wilder' })
  city: string;

  @ManyToMany(() => Skill)
  @JoinTable()
  @Field(() => [Skill], { description: 'Skills list of the wilder' })
  skills: Skill[];
}

export default Wilder;
