import { ChangeEvent, ReactNode } from 'react';
import { IInputProps } from '../interfaces/props/ui';

export type IChildren = {
    children: ReactNode;
};

export type SkillType = {
    title: string;
    votes: number;
};

export type WilderType = {
    id: string;
    name: string;
    city: string;
    skills: SkillType[];
};

export type GetWildersType = {
    wilders: WilderType[];
};

export type GetWilderType = {
    wilder: WilderType;
};

export type PostWilderType = {
    postWilder: WilderType;
};

export type UpdateWilderType = {
    updateWilder: WilderType;
};

export type DeleteWilderType = {
    removeWilder: WilderType;
};

export type FormType = {
    method: 'post' | 'put';
    wilder?: WilderType;
};

export type InputPropsType = Pick<
    IInputProps,
    'value' | 'name' | 'label' | 'className' | 'placeholder'
> & {
    placeholder: string;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

export type SelectPropsType = Pick<
    IInputProps,
    'value' | 'name' | 'label' | 'className'
> & {
    handleChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: { id: number; value: string }[];
    labelDefault: string;
    valueDefault: string;
};

export type IWilderList = {
    search: string;
    filter: string;
};
