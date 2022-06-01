// import { IWilder } from '../interfaces/elements';
// import { ChangeEvent } from 'react';
// import { IInputProps } from '../interfaces/props/ui';
// import { IGetOneWilderParams } from '../interfaces/utils/query';

export type SkillType = {
    title: string;
    votes: number;
};

export type WilderType = {
    _id: string;
    name: string;
    city: string;
    skills: SkillType[];
};

export type GetWildersType = {
    wilders: WilderType[];
};

// export type WilderPropsType = IWilder;

// export type WilderWithoutIdType = Pick<IWilder, 'name' | 'city' | 'skills'>;

// export type InputPropsType = Pick<
//     IInputProps,
//     'value' | 'name' | 'label' | 'className' | 'placeholder'
// > & {
//     placeholder: string;
//     handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
// };

// export type SelectPropsType = Pick<
//     IInputProps,
//     'value' | 'name' | 'label' | 'className'
// > & {
//     handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
//     options: { id: number; value: string }[];
//     labelDefault: string;
//     valueDefault: string;
// };

// export type GetWildersType = () => Promise<IWilder[]>;

// export type GetWilderType = ({
//     queryKey,
// }: IGetOneWilderParams) => Promise<IWilder>;
