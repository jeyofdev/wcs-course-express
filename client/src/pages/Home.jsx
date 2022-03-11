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

    console.log(wilders);

    return (
        <>
            {!loading ? (
                <WilderList wilders={wilders} />
            ) : (
                <Alert>Loading wilders...</Alert>
            )}
        </>
    );
};

export default Home;
