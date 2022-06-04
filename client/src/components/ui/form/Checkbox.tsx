const Checkbox = ({ label, name, checked, onChange }: any) => {
    return (
        <div className="flex flex-column my-1">
            <input
                type="checkbox"
                className=""
                id={name}
                name={name}
                checked={checked}
                onChange={onChange}
            />
            <label htmlFor={name} className="ml-2">
                {label}
            </label>
        </div>
    );
};

export default Checkbox;
