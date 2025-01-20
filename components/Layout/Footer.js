import styles from './Footer.module.css';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.contactInfo}>
                    <h3>Soluciones Tecnológicas JM</h3>
                    <p>Dirección: [Sin Fisica]</p>
                    <p>Teléfono: [+573014310093]</p>
                    <p>Correo electrónico: [jsmd2499@outlook.com]</p>
                </div>
                <div className={styles.socialIcons}>
                    {/* Iconos de redes sociales (opcional) */}
                    <Link href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
                    </Link>
                    <Link href="https://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
                    </Link>
                    <Link href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
                    </Link>
                </div>
                <div className={styles.copyright}>
                    <p>&copy; {currentYear} Soluciones Tecnológicas JM. Todos los derechos reservados.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;