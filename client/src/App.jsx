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

    const fetchDatas = async () => {
        try {
            const datas = await getAllWilders();
            setWilders(datas);
        } catch (error) {
        } finally {
            setLoading(false);
        }
    };

    const handleShowForm = () => {
        setShowForm(!showForm);
    };

    useEffect(() => {
        fetchDatas();
    }, []);

    return (
        <div className="App">
            <Layout>
                {!loading ? (
                    <WilderList wilders={wilders} refetch={fetchDatas} />
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
