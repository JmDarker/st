import Link from 'next/link';
import Image from 'next/image';
import styles from './Navbar.module.css';
import { useState } from 'react';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav className={styles.navbar}>
            <div className={styles.container}>
                <Link href="/" className={styles.logo}>
                    {/* Logo como texto */}
                    Soluciones Tecnológicas JM
                    {/* Logo como imagen (descomentar si se usa una imagen)
                    <Image
                        src="/images/logo.png" // Ruta a tu logo
                        alt="Logo de Soluciones Tecnológicas JM"
                        width={150}
                        height={50}
                    />
                     */}
                </Link>
                <div className={styles.menuIcon} onClick={toggleMenu}>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                    <div className={`${styles.bar} ${isMenuOpen ? styles.open : ''}`}></div>
                </div>
                <ul className={`${styles.navLinks} ${isMenuOpen ? styles.active : ''}`}>
                    <li><Link href="/">Inicio</Link></li>
                    <li><Link href="/servicios">Servicios</Link></li>
                    <li><Link href="/nosotros">Sobre Nosotros</Link></li>
                    <li><Link href="/contacto">Contacto</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;