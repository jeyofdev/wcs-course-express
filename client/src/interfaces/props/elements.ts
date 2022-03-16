import { ISkill, IWilder } from '../elements';

export interface ISkillProps {
    skill: ISkill;
}

export interface IWilderFormProps {
    isCreated?: boolean;
    defaultValues?: IWilder;
    mutation: any;
}

export interface IWilderList {
    search: string;
    filter: string;
}
