import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import WilderForm from '../components/wilders/WilderForm';
import { getWilderById, updateWilder } from '../utils/queries';

const Update = () => {
    const navigate = useNavigate();
    const { id } = useParams();

    const [formDatas, setFormDatas] = useState({
        name: '',
        city: '',
        skills: [],
    });

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

        await updateWilder(id, formDatas);
        navigate('/');
    };

    return (
        <WilderForm
            formDatas={formDatas}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            isCreated={false}
        />
    );
};

export default Update;
