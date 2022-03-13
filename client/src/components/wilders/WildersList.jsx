import Alert from '../ui/Alert';
import Wilder from './Wilder';
import { useGetWilders } from '../../hooks/wildersHooks';

const WildersList = () => {
    const { isLoading, isError, error, data: wilders } = useGetWilders();

    if (isLoading) {
        return (
            <div className="w-full max-w-sm mx-auto">
                <Alert className="border-blue-300 bg-blue-100 text-blue-900 mx-0">
                    Loading wilders...
                </Alert>
            </div>
        );
    }

    if (isError) {
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
            {wilders.length > 0 ? (
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4 pb-4">
                    {wilders.map((wilder) => (
                        <Wilder
                            key={wilder._id}
                            id={wilder._id}
                            name={wilder.name}
                            city={wilder.city}
                            skills={wilder.skills}
                        />
                    ))}
                </div>
            ) : (
                <Alert variant="info">No result found.</Alert>
            )}
        </>
    );
};

export default WildersList;
