export interface ISkill {
    title: String;
    votes: Number;
}

export interface IWilder {
    name: string;
    city: string;
    skills: ISkill[];
}
