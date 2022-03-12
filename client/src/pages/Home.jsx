import { useEffect, useState } from 'react';
import Alert from '../components/ui/Alert';
import { getAllWilders } from '../utils/queries';
import WilderList from '../components/wilders/WilderList';

const Home = () => {
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(datas);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return (
        <>
            {!loading ? (
                <WilderList wilders={wilders} refetch={fetchDatas} />
            ) : (
                <Alert>Loading wilders...</Alert>
            )}
        </>
    );
};

export default Home;
