import Button from '../ui/Button';
import { optionsCities } from '../../datas';

const WilderForm = ({
    formDatas,
    handleChange,
    handleSubmit,
    isCreated = true,
}) => {
    return (
        <form
            className="w-full max-w-300px mx-auto mb-20 border border-gray-200 py-8 px-6 rounded-lg max-w-sm"
            onSubmit={handleSubmit}
        >
            <div className="mb-6">
                <label className="mb-3 block" htmlFor="name">
                    Name :{' '}
                </label>
                <input
                    className="bg-white border border-gray-300 p-4 rounded-lg w-full"
                    type="text"
                    name="name"
                    placeholder="enter name"
                    value={formDatas.name}
                    onChange={handleChange}
                />
            </div>
            <div className="mb-6">
                <label className="mb-3 block" htmlFor="city">
                    City :{' '}
                </label>
                <select
                    className="bg-white border border-gray-300 p-4 rounded-lg w-full"
                    name="city"
                    value={formDatas.city}
                    onChange={handleChange}
                >
                    <option value="">Select city</option>
                    {optionsCities.map((city) => (
                        <option key={city.id} value={city.value}>
                            {city.value.slice(0, 1).toUpperCase() +
                                city.value.slice(1)}
                        </option>
                    ))}
                </select>
            </div>

            <Button className="ml-0">
                {isCreated ? 'Add new wilder' : 'Update wilder'}
            </Button>
        </form>
    );
};

export default WilderForm;
