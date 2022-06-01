import Layout from './layout/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
// import Create from './pages/Create';
// import Update from './pages/Update';
// import NotFound from './pages/NotFound';

const App = () => {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* <Route path="/create" element={<Create />} />
                    <Route path="/update/:id" element={<Update />} />
                    <Route path="*" element={<NotFound />} /> */}
                </Routes>
            </Layout>
        </div>
    );
};

export default App;
