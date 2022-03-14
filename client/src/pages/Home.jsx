import { useState } from 'react';
import { Link } from 'react-router-dom';
import WildersList from '../components/wilders/WildersList';
import { PlusCircleIcon } from '@heroicons/react/solid';
import Input from '../components/ui/form/Input';
import Select from '../components/ui/form/select';
import { optionsCities } from '../datas/';
import { ToastContainer } from 'react-toastify';

const Home = () => {
    const [search, setSearch] = useState('');
    const [filter, setFilter] = useState('all');

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    const handleChangeSelect = (e) => {
        setFilter(e.target.value);
    };

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

            <WildersList search={search} filter={filter} />

            <Link to="/create">
                <PlusCircleIcon className="h-20 w-20 text-red-500 mx-auto" />
            </Link>

            <ToastContainer />
        </>
    );
};

export default Home;
