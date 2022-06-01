import { InputPropsType } from '../../../types';

const Input = ({
    value,
    handleChange,
    name,
    placeholder,
    className,
    label = false,
}: InputPropsType) => {
    return (
        <>
            {' '}
            {label && (
                <label className="mb-3 block" htmlFor={name}>
                    {name.slice(0, 1).toUpperCase() + name.slice(1)} :{' '}
                </label>
            )}
            <input
                type="text"
                className={`bg-white border border-gray-300 p-4 rounded-lg ${className}`}
                placeholder={placeholder}
                name={name}
                value={value}
                onChange={handleChange}
            />
        </>
    );
};

export default Input;
