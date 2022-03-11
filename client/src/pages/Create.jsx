import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import { optionsCities } from '../datas';
import { addNewWilder } from '../utils/queries';

const Create = ({ refetch }) => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: '',
        city: '',
        skills: [],
    });

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const onSubmit = async (e) => {
        e.preventDefault();

        await addNewWilder(formDatas);
        setFormDatas({
            name: '',
            city: '',
            skills: [],
        });
        navigate('/');
    };

    return (
        <>
            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Add a new wilder
            </h1>

            <form
                className="w-full max-w-300px mx-auto mb-20 border border-gray-200 py-8 px-6 rounded-lg w-full max-w-sm mb-10 "
                onSubmit={onSubmit}
            >
                <div className="mb-6">
                    <label className="mb-3 block" htmlFor="name">
                        Name :{' '}
                    </label>
                    <input
                        className="bg-white border border-gray-300 p-4 rounded-lg w-full"
                        type="text"
                        name="name"
                        placeholder="enter name"
                        value={formDatas.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="mb-3 block" htmlFor="city">
                        City :{' '}
                    </label>
                    <select
                        className="bg-white border border-gray-300 p-4 rounded-lg w-full"
                        name="city"
                        value={formDatas.city}
                        onChange={handleChange}
                    >
                        <option value="">Select city</option>
                        {optionsCities.map((city) => (
                            <option key={city.id} value={city.value}>
                                {city.value.slice(0, 1).toUpperCase() +
                                    city.value.slice(1)}
                            </option>
                        ))}
                    </select>
                </div>

                <Button className="ml-0">Add new wilder</Button>
            </form>
        </>
    );
};

export default Create;
