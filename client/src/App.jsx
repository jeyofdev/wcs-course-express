import { useEffect, useState } from 'react';
import Layout from './components/layout/Layout';
import Alert from './components/ui/Alert';
import WilderList from './components/wilders/WilderList';
import { getAllWilders } from './utils/queries';

const App = () => {
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
        <div className="App">
            <Layout>
                {!loading ? (
                    <WilderList wilders={wilders} />
                ) : (
                    <Alert>Loading wilders...</Alert>
                )}
            </Layout>
        </div>
    );
};

export default App;
