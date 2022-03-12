import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Alert from '../components/ui/Alert';
import { getAllWilders } from '../utils/queries';
import WilderList from '../components/wilders/WilderList';
import { PlusCircleIcon } from '@heroicons/react/solid';
import { optionsCities } from '../datas';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(
                datas
                    .filter((wilder) =>
                        wilder.name
                            .slice(0, search.length)
                            .toLowerCase()
                            .includes(search.toLowerCase())
                    )
                    .filter((wilderFiltered) =>
                        filter === 'all'
                            ? wilderFiltered
                            : wilderFiltered.city
                                  .toLowerCase()
                                  .includes(filter.toLowerCase())
                    )
            );
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

    useEffect(() => {
        fetchDatas();
    }, [search, filter]);

    return (
        <>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-8">
                <input
                    type="text"
                    className="bg-white border border-gray-300 p-4 rounded-lg sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto"
                    placeholder="your search"
                    name="search"
                    onChange={handleSearch}
                />

                <select
                    className="bg-white border border-gray-300 p-4 rounded-lg sm:mx-4 px-4 my-4 max-w-300px mx-auto sm:max-w-auto"
                    name="city"
                    value={filter}
                    onChange={handleChangeSelect}
                >
                    <option value="all">All city</option>
                    {optionsCities.map((city) => (
                        <option key={city.id} value={city.value}>
                            {city.value.slice(0, 1).toUpperCase() +
                                city.value.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            {!loading ? (
                <WilderList wilders={wilders} refetch={fetchDatas} />
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
