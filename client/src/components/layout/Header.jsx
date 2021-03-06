const Header = ({ children }) => {
    return (
        <div className="bg-red-500 py-8 text-center">
            <h1 className="text-white text-2xl font-bold">{children}</h1>
        </div>
    );
};

export default Header;
