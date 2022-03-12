import Button from '../ui/Button';
import Select from '../ui/form/Select';
import { optionsCities } from '../../datas';
import Input from '../ui/form/Input';

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
                <Input
                    value={formDatas.name}
                    handleChange={handleChange}
                    name="name"
                    placeholder="enter name"
                    className="w-full"
                    label
                />
            </div>
            <div className="mb-6">
                <Select
                    name="city"
                    value={formDatas.city}
                    handleChange={handleChange}
                    options={optionsCities}
                    labelDefault="Select city"
                    valueDefault=""
                    className="w-full"
                    label
                />
            </div>

            <Button className="ml-0">
                {isCreated ? 'Add new wilder' : 'Update wilder'}
            </Button>
        </form>
    );
};

export default WilderForm;
