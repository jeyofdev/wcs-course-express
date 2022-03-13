const Button = ({ children, className, onClick }) => {
    return (
        <button
            className={`p-4 rounded-md text-white font-bold ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;
