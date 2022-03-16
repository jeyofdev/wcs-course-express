import { ChangeEvent, useState } from 'react';
import Button from '../ui/Button';
import Input from '../ui/form/Input';
import Select from '../ui/form/select';
import Alert from '../ui/Alert';
import { optionsCities } from '../../datas';
import { IWilderFormProps } from '../../interfaces/props/elements';

const WilderForm = ({
    isCreated = true,
    defaultValues,
    mutation,
}: IWilderFormProps) => {
    const [formDatas, setFormDatas] = useState({
        name: defaultValues ? defaultValues.name : '',
        city: defaultValues ? defaultValues.city : '',
        skills: defaultValues ? defaultValues.skills : [],
    });

    const [formErrors, setFormErrors] = useState<string | null>();

    const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit: any = async (e: SubmitEvent) => {
        e.preventDefault();
        const datas = await mutation({
            id: defaultValues ? defaultValues._id : null,
            ...formDatas,
        });

        if (!datas.success && datas.result) {
            setFormErrors(
                Object.values(datas.result)
                    .map((message) => message)
                    .join(', ')
            );
        }
    };

    return (
        <>
            {formErrors && (
                <div className="w-full max-w-sm mx-auto ">
                    <Alert className="border-red-300 bg-red-100 text-red-900 mx-0">
                        {formErrors}
                    </Alert>
                </div>
            )}

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
                    {isCreated ? 'Add new wilder' : 'Update a wilder'}
                </Button>
            </form>
        </>
    );
};

export default WilderForm;
