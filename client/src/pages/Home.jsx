import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/ui/Alert';
import { getAllWilders, deleteWilder } from '../utils/queries';
import WilderList from '../components/wilders/WilderList';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { optionsCities } from '../datas';
import { ToastContainer } from 'react-toastify';
import { filtersWilders } from '../utils/filters';
import Input from '../components/ui/form/Input';
import Select from '../components/ui/form/Select';
import { notifyDanger } from '../utils/notifications';

const Home = () => {
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(filtersWilders(datas, search, filter));
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleChangeSelect = (e) => {
        setFilter(e.target.value);
    };

    const handleDelete = async (id) => {
        const datas = await deleteWilder(id);
        if (datas.success) {
            notifyDanger(datas.message);
            fetchDatas();
        }
    };

    useEffect(() => {
        fetchDatas();
    }, [search, filter]);

    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                <Input
                    value={search}
                    handleChange={handleSearch}
                    name="search"
                    placeholder="your search"
                    className="sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto"
                />

                <Select
                    name="city"
                    value={filter}
                    handleChange={handleChangeSelect}
                    options={optionsCities}
                    labelDefault="All city"
                    valueDefault="all"
                    className="sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto"
                />
            </div>

            {!loading ? (
                <WilderList wilders={wilders} handleDelete={handleDelete} />
            ) : (
                <Alert>Loading wilders...</Alert>
            )}

            <Link to="/create">
                <PlusCircleIcon className="h-20 w-20 text-red-500 mx-auto" />
            </Link>

            <ToastContainer />
        </>
    );
};

export default Home;
