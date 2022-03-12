import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewWilder } from '../utils/queries';
import WilderForm from '../components/wilders/WilderForm';

const Create = () => {
    const navigate = useNavigate();

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

            <WilderForm
                formDatas={formDatas}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default Create;
