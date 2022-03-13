const Alert = ({ className, children }) => {
    return (
        <div
            className={`relative mx-4 p-4 mb-4 rounded-md border ${className}`}
        >
            {children}
        </div>
    );
};

export default Alert;
