import { useNavigate } from 'react-router-dom';
import Button from '../ui/Button';
import Input from '../ui/form/Input';
import Select from '../ui/form/Select';
import { optionsCities } from '../../datas';
import { useState } from 'react';

const WilderForm = ({ isCreated = true, defaultValues, mutation }) => {
    const navigate = useNavigate();
    const [formDatas, setFormDatas] = useState({
        name: defaultValues ? defaultValues.name : '',
        city: defaultValues ? defaultValues.city : '',
        skills: defaultValues ? defaultValues.skills : [],
    });

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        await mutation({
            id: defaultValues ? defaultValues._id : null,
            ...formDatas,
        });
        navigate('/');
    };

    return (
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
    );
};

export default WilderForm;
