import { useState } from 'react';
import Button from '../ui/Button';
import { ToastContainer } from 'react-toastify';
import { optionsCities } from '../../datas';
import { addNewWilder } from '../../utils/queries';
import { notifySuccess } from '../../utils/notification';

const CreateWilder = ({ isShow, refetch }) => {
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

        refetch();
        notifySuccess('Wilder added with success');
        setFormDatas({
            name: '',
            city: '',
            skills: [],
        });
    };

    return (
        <>
            {isShow && (
                <form
                    className="w-full max-w-300px mx-auto mb-20"
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

                    <Button className="ml-0">Add</Button>
                </form>
            )}

            <ToastContainer />
        </>
    );
};

export default CreateWilder;
