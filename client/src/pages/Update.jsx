import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WilderForm from '../components/wilders/WilderForm';
import { getWilderById, updateWilder } from '../utils/queries';
import { notifySuccess } from '../utils/notifications';
import Alert from '../components/ui/Alert';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formDatas, setFormDatas] = useState({
        name: '',
        city: '',
        skills: [],
    });
    const [errors, setErrors] = useState(null);

    const fetchWilderById = async () => {
        try {
            const datas = await getWilderById(id);
            setFormDatas(datas);
        } catch (error) {}
        getWilderById();
    };

    useEffect(() => {
        fetchWilderById();
    }, []);

    const handleChange = (e) => {
        setFormDatas({ ...formDatas, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const datas = await updateWilder(id, formDatas);

        if (datas.success) {
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
                isCreated={false}
            />
        </>
    );
};

export default Update;
