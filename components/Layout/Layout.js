import Navbar from './Navbar';
import Footer from './Footer';
import styles from './Layout.module.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }) => {
    return (
        <div className={styles.layout}>
            <Navbar />
            <main className={`${styles.main} ${inter.className}`}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default Layout;