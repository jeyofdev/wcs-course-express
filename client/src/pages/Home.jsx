import { Link } from 'react-router-dom';
import WildersList from '../components/wilders/WildersList';
import { PlusCircleIcon } from '@heroicons/react/solid';

const Home = () => {
    return (
        <>
            <WildersList />
            <Link to="/create">
                <PlusCircleIcon className="h-20 w-20 text-red-500 mx-auto" />
            </Link>
        </>
    );
};

export default Home;
