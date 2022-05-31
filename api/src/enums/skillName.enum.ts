/* eslint-disable import/prefer-default-export */
import { registerEnumType } from 'type-graphql';

export enum SkillName {
  REACT = 'React',
  VUE = 'Vue',
  ANGULAR = 'Angular',
  SYMFONY = 'Symfony',
  LARAVEL = 'Laravel',
}

registerEnumType(SkillName, {
  name: 'SkillName',
  description: 'The basic skills',
});
