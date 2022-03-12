import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
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
            <Link
                to="/create"
                className="ml-4 bg-red-500 p-4 rounded-md text-white font-bold"
            >
                Add new Wilder
            </Link>

            {!loading ? (
                <WilderList wilders={wilders} refetch={fetchDatas} />
            ) : (
                <Alert>Loading wilders...</Alert>
            )}
        </>
    );
};

export default Home;
