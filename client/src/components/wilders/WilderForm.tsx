import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ApolloError, useMutation } from '@apollo/client';
import { CREATE_WILDER, UPDATE_WILDER } from '../../queries/mutation';
import { GET_WILDERS } from '../../queries/queries';
import { notifyError, notifySuccess } from '../../utils/notifications';
import {
    FormType,
    PostWilderType,
    SkillType,
    UpdateWilderType,
} from '../../types';
import Button from '../ui/Button';
import Input from '../ui/form/Input';
import Select from '../ui/form/select';
import { optionsCities, optionsSkills } from '../../datas';
import Checkbox from '../ui/form/Checkbox';
import { v4 as uuid } from 'uuid';

const WilderForm = ({ method, wilder }: FormType) => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: wilder?.name ?? '',
        city: wilder?.city ?? '',
        skills: wilder?.skills ?? [],
    });

    const [createWilder] = useMutation<PostWilderType>(CREATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${formDatas.name}" has been created`);
            setFormDatas({
                name: '',
                city: '',
                skills: [],
            });
            navigate('/');
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const [updateWilder] = useMutation<UpdateWilderType>(UPDATE_WILDER, {
        onCompleted: () => {
            notifySuccess(`Wilder "${formDatas?.name}" has been updated`);
            navigate('/');
        },
        onError: (error) => {
            notifyError(error.message);
        },
        refetchQueries: [GET_WILDERS],
    });

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleChangeSkill = (e: any) => {
        setFormDatas(
            e.target.checked
                ? {
                      ...formDatas,
                      skills: [
                          ...formDatas?.skills,
                          { title: e.target.name, votes: 0 },
                      ],
                  }
                : {
                      ...formDatas,
                      skills: formDatas?.skills.filter(
                          (skill: SkillType) => skill.title !== e.target.name
                      ),
                  }
        );
    };

    const handleSubmit: any = async (e: SubmitEvent) => {
        e.preventDefault();

        try {
            if (method === 'post') {
                createWilder({ variables: formDatas });
            }
            if (method === 'put') {
                updateWilder({
                    variables: { wilderId: wilder?.id, ...formDatas },
                });
            }
        } catch (error) {}
    };

    return (
        <>
            <form
                className="max-w-300px mx-auto border border-gray-200 py-8 px-6 rounded-lg w-full max-w-sm mb-10"
                onSubmit={handleSubmit}
            >
                <div className="mb-6">
                    <Input
                        value={formDatas.name}
                        handleChange={handleChange}
                        name="name"
                        placeholder="enter name"
                        className="w-full"
                        label
                    />
                </div>

                <div className="mb-6">
                    <Select
                        name="city"
                        value={formDatas.city}
                        handleChange={handleChange}
                        options={optionsCities}
                        labelDefault="Select city"
                        valueDefault=""
                        className="w-full"
                        label
                    />
                </div>

                {optionsSkills.map((skill) => (
                    <>
                        <Checkbox
                            key={uuid()}
                            label={skill?.value}
                            name={skill?.value}
                            checked={
                                formDatas?.skills.filter(
                                    (item: SkillType) =>
                                        item.title === skill?.value
                                ).length > 0
                            }
                            onChange={handleChangeSkill}
                        />
                    </>
                ))}

                <Button className="bg-red-500 ml-0 mt-6">
                    {method === 'post' ? 'Add new wilder' : 'Update wilder'}
                </Button>
            </form>
        </>
    );
};

export default WilderForm;
