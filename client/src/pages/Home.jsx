import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/ui/Alert';
import { getAllWilders } from '../utils/queries';
import WilderList from '../components/wilders/WilderList';
import { PlusCircleIcon } from '@heroicons/react/solid';

const Home = () => {
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(
                datas.filter((wilder) => {
                    return wilder.name
                        .slice(0, search.length)
                        .toLowerCase()
                        .includes(search.toLowerCase());
                })
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetchDatas();
    }, [search]);

    return (
        <>
            <input
                type="text"
                className="bg-white border border-gray-300 ml-4 w-1/3 p-4 rounded-lg"
                placeholder="your search"
                name="search"
                onChange={handleSearch}
            />

            {!loading ? (
                <WilderList wilders={wilders} refetch={fetchDatas} />
            ) : (
                <Alert>Loading wilders...</Alert>
            )}

            <Link to="/create">
                <PlusCircleIcon className="h-20 w-20 text-red-500 mx-auto" />
            </Link>
        </>
    );
};

export default Home;
