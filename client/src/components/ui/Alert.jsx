const Alert = ({ children }) => {
    return (
        <div className="relative mx-4 p-4 mb-4 rounded-md border border-blue-300 bg-blue-100 text-blue-900">
            {children}
        </div>
    );
};

export default Alert;
