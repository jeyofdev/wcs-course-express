import { ChangeEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { CREATE_WILDER, UPDATE_WILDER } from '../../queries/mutation';
import { GET_WILDERS } from '../../queries/queries';
import { notifyError, notifySuccess } from '../../utils/notifications';
import { FormType, PostWilderType, UpdateWilderType } from '../../types';
import Button from '../ui/Button';
import Input from '../ui/form/Input';
import Select from '../ui/form/select';
import { optionsCities } from '../../datas';

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

    const handleSubmit: any = async (e: SubmitEvent) => {
        e.preventDefault();

        try {
            if (method === 'post') {
                createWilder({ variables: formDatas });
            }
            if (method === 'put') {
                updateWilder({
                    variables: { wilderId: wilder?._id, ...formDatas },
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

                <Button className="bg-red-500 ml-0">
                    {method === 'post' ? 'Add new wilder' : 'Update wilder'}
                </Button>
            </form>
        </>
    );
};

export default WilderForm;
