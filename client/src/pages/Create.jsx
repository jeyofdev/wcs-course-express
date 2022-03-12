import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { addNewWilder } from '../utils/queries';
import WilderForm from '../components/wilders/WilderForm';
import { notifySuccess } from '../utils/notifications';
import Alert from '../components/ui/Alert';

const Create = () => {
    const navigate = useNavigate();

    const [formDatas, setFormDatas] = useState({
        name: '',
        city: '',
        skills: [],
    });
    const [errors, setErrors] = useState(null);

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datas = await addNewWilder(formDatas);

        if (datas.success) {
            setFormDatas({
                name: '',
                city: '',
                skills: [],
            });
            notifySuccess(datas.message);
            navigate('/');
        } else if (!datas.success && datas.result) {
            setErrors(
                Object.values(datas.result)
                    .map((message) => message)
                    .join(', ')
            );
        } else {
            setErrors('The name already exist');
        }
    };

    return (
        <>
            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Add a new wilder
            </h1>

            {errors && (
                <div className="w-full max-w-sm mx-auto ">
                    <Alert classname="border-red-300 bg-red-100 text-red-900 mx-0">
                        {errors}
                    </Alert>
                </div>
            )}

            <WilderForm
                formDatas={formDatas}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    );
};

export default Create;
