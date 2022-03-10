import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen">
            <Header>Wilders Book</Header>

            <div className="container mx-auto mt-8 px-4">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
