const Alert = ({
    classname = 'border-blue-300 bg-blue-100 text-blue-900',
    children,
}) => {
    return (
        <div
            className={`relative mx-4 p-4 mb-4 rounded-md border ${classname}`}
        >
            {children}
        </div>
    );
};

export default Alert;
