import { useEffect, useState } from 'react';
import Alert from '../ui/Alert';
import Wilder from './Wilder';
import { useQuery } from '@apollo/client';
import { GET_WILDERS } from '../../queries/queries';
import { GetWildersType, IWilderList, WilderType } from '../../types';
import { filtersWilders } from '../../utils/filters';

const WildersList = ({ search, filter }: IWilderList) => {
    const { loading, data, error } = useQuery<GetWildersType>(GET_WILDERS);

    const [wildersFiltrered, setWildersFiltered] = useState<WilderType[]>([]);

    useEffect(() => {
        if (data?.wilders) {
            setWildersFiltered(filtersWilders(data?.wilders, search, filter));
        }
    }, [search, filter, data]);

    if (loading) {
        return (
            <div className="w-full max-w-sm mx-auto">
                <Alert
                    className="border-blue-300 bg-blue-100 text-blue-900 mx-0"
                    role="progress"
                >
                    Loading wilders...
                </Alert>
            </div>
        );
    }

    if (error) {
        return (
            <div className="w-full max-w-sm mx-auto ">
                <Alert className="border-red-300 bg-red-100 text-red-900 mx-0">
                    {error.message}
                </Alert>
            </div>
        );
    }

    return (
        <>
            {wildersFiltrered?.length > 0 ? (
                <div
                    className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-4"
                    data-testid="wilderList"
                >
                    {wildersFiltrered.map((wilder: WilderType) => (
                        <Wilder
                            key={wilder._id}
                            _id={wilder._id}
                            name={wilder.name}
                            city={wilder.city}
                            skills={wilder.skills}
                        />
                    ))}
                </div>
            ) : (
                <Alert className="border-blue-300 bg-blue-100 text-blue-900 mx-0">
                    No result found.
                </Alert>
            )}
        </>
    );
};

export default WildersList;
