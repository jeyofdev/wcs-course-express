import { IChildren } from '../types';
import Footer from './Footer';
import Header from './Header';

const Layout = ({ children }: IChildren) => {
    return (
        <div className="min-h-screen">
            <Header>Wilders Book</Header>
            <div className="container mx-auto my-16 px-4">{children}</div>
            <Footer />
        </div>
    );
};

export default Layout;
