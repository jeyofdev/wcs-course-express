import { useNavigate } from 'react-router-dom';
import WilderForm from '../components/wilders/WilderForm';
import { useAddWilder } from '../hooks/wildersHooks';

const Create = () => {
    const navigate = useNavigate();
    const { mutateAsync, isLoading: isMutating } = useAddWilder(navigate);

    return (
        <>
            <h1 className="mb-8 mt-10 text-red-500 font-bold text-2xl text-center">
                Add a new wilder
            </h1>

            <WilderForm mutation={mutateAsync} />
        </>
    );
};

export default Create;
