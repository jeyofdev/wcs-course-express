import { Link } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import WilderForm from '../components/wilders/WilderForm';

const Create = () => {
    return (
        <>
            <Link
                to="/"
                className="inline-block bg-red-500 text-gray-50 py-2 px-4 rounded no-underline my-4 mx-0"
            >
                Back to home
            </Link>

            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Add a new wilder
            </h1>

            <WilderForm method="post" />

            <ToastContainer position="bottom-right" />
        </>
    );
};

export default Create;
