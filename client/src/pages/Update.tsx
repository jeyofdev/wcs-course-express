import { Link, useParams } from 'react-router-dom';
import WilderForm from '../components/wilders/WilderForm';
import { useQuery } from '@apollo/client';
import { GET_WILDER_BYid } from '../queries/queries';
import { GetWilderType } from '../types';

const Update = () => {
    const { wilderId } = useParams();

    const { loading, data } = useQuery<GetWilderType>(GET_WILDER_BYid, {
        variables: { wilderId },
        fetchPolicy: 'network-only',
    });

    return (
        <>
            <Link
                to="/"
                className="inline-block bg-red-500 text-gray-50 py-2 px-4 rounded no-underline my-4 mx-0"
            >
                Back to home
            </Link>

            <h2 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Update the user {data?.wilder?.name}
            </h2>

            {!loading && data?.wilder && (
                <WilderForm method="put" wilder={data?.wilder} />
            )}
        </>
    );
};

export default Update;
