import { SelectPropsType } from '../../../types';

const Select = ({
    name,
    value,
    handleChange,
    options,
    labelDefault,
    valueDefault,
    className,
    label = false,
}: SelectPropsType) => {
    return (
        <>
            {label && (
                <label className="mb-3 block" htmlFor={name}>
                    {name.slice(0, 1).toUpperCase() + name.slice(1)} :{' '}
                </label>
            )}
            <select
                className={`bg-white border border-gray-300 p-4 rounded-lg ${className}`}
                name={name}
                value={value}
                onChange={handleChange}
            >
                <option value={valueDefault}>{labelDefault}</option>
                {options.map((item) => (
                    <option key={item.id} value={item.value}>
                        {item.value.slice(0, 1).toUpperCase() +
                            item.value.slice(1)}
                    </option>
                ))}
            </select>
        </>
    );
};

export default Select;
