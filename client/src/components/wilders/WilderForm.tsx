import { ChangeEvent, FormEventHandler, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/form/Input';
import Select from '../ui/form/select';
// import Alert from '../ui/Alert';
import { optionsCities } from '../../datas';
// import { IWilderFormProps } from '../../interfaces/props/elements';
import { CREATE_WILDER } from '../../queries/mutation';
import { useMutation } from '@apollo/client';
import { useNavigate } from 'react-router-dom';
import { GET_WILDERS } from '../../queries/queries';
import { notifyError, notifySuccess } from '../../utils/notifications';
import { FormType } from '../../types';

const WilderForm = ({ method, wilder }: FormType) => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: wilder?.name ?? '',
        city: wilder?.city ?? '',
        skills: wilder?.skills ?? [],
    });

    const [createWilder, error] = useMutation(CREATE_WILDER, {
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

    console.log(error);

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
        } catch (error) {}
    };

    return (
        <>
            {/* {formErrors?.graphQLErrors && (
                <div className="w-full max-w-sm mx-auto ">
                    <Alert className="border-red-300 bg-red-100 text-red-900 mx-0">
                        {formErrors}
                    </Alert>
                </div>
            )} */}

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

                <Button className="bg-red-500 ml-0">Add new wilder</Button>
            </form>
        </>
    );
};

export default WilderForm;
