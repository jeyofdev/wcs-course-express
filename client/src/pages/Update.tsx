import { useNavigate, useParams } from 'react-router-dom';
import WilderForm from '../components/wilders/WilderForm';
import { useGetWilderById, useUpdateWilder } from '../hooks/wildersHooks';
import Alert from '../components/ui/Alert';

const Update = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const { isLoading, isError, error, data: wilder } = useGetWilderById(id);

    const { mutateAsync, isLoading: isMutating } = useUpdateWilder(navigate);

    if (isLoading) {
        return (
            <div className="w-full max-w-sm mx-auto">
                <Alert className="border-blue-300 bg-blue-100 text-blue-900 mx-0">
                    Loading wilder...
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
            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Update the wilder{' '}
                {wilder &&
                    wilder.name.slice(0, 1).toUpperCase() +
                        wilder.name.slice(1).toLowerCase()}
                .
            </h1>

            <WilderForm
                isCreated={false}
                defaultValues={wilder}
                mutation={mutateAsync}
            />
        </>
    );
};

export default Update;
