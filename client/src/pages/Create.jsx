import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import Input from '../components/ui/form/Input';
import Select from '../components/ui/form/select';
import { optionsCities } from '../datas';
import { useAddWilder } from '../hooks/wildersHooks';

const Create = () => {
    const navigate = useNavigate();

    const { mutateAsync, isLoading: isMutating } = useAddWilder();

    const [formDatas, setFormDatas] = useState({
        name: '',
        city: '',
        skills: [],
    });

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await mutateAsync({ ...formDatas });
        navigate('/');
    };

    return (
        <>
            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Add a new wilder
            </h1>

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

export default Create;
