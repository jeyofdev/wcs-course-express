import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Alert from './components/ui/Alert';
import Button from './components/ui/Button';
import CreateWilder from './components/wilders/CreateWilder';
import WilderList from './components/wilders/WilderList';
import { getAllWilders } from './utils/queries';

const App = () => {
    const [showForm, setShowForm] = useState(false);
    const [wilders, setWilders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [search, setSearch] = useState('');

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(
                datas.filter((wilder) =>
                    wilder.name.toLowerCase().includes(search.toLowerCase())
                )
            );
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    useEffect(() => {
        fetchDatas();
    }, [search]);

    return (
        <div className="App">
            <Layout>
                <input
                    type="text"
                    className="bg-white border border-gray-300 ml-4 w-1/3 p-4 rounded-lg"
                    placeholder="your search"
                    name="search"
                    onChange={handleSearch}
                />

                {!loading ? (
                    <WilderList
                        wilders={wilders}
                        showForm={showForm}
                        refetch={fetchDatas}
                    />
                ) : (
                    <Alert>Loading wilders...</Alert>
                )}

                <Button
                    className={`ml-4 ${showForm ? 'mb-8' : 'mb-20'}`}
                    onClick={handleShowForm}
                >
                    {!showForm ? 'Show the form' : 'hide the form'}
                </Button>

                <CreateWilder isShow={showForm} refetch={fetchDatas} />
            </Layout>
        </div>
    );
};

export default App;
