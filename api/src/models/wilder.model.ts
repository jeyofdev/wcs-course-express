import { Field, ID, ObjectType } from 'type-graphql';
import {
  BaseEntity,
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import {} from 'class-validator';
import Skill from './skill.model';

@ObjectType({ description: 'Model for the wilders' })
@Entity()
export class Wilder extends BaseEntity {
  @PrimaryGeneratedColumn()
  @Field(() => ID, {
    description: 'Id for each wilder',
  })
  id!: Number;

  @Column({ unique: true })
  @Field(() => String, { description: 'Name of the wilder' })
  // @Property({ unique: true, required: [true, 'The name is required!'] })
  name: string;

  @Column()
  @Field(() => String, { description: 'City of the wilder' })
  // @Property({ required: [true, 'The city is required!'] })
  city: string;

  @ManyToMany(() => Skill)
  @JoinTable()
  @Field(() => [Skill], { description: 'Skills list of the wilder' })
  // @Property({ required: [true, 'The skills list is required!'] })
  skills: Skill[];
}

export default Wilder;
