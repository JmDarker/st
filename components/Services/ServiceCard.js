import styles from './ServiceCard.module.css';
import Image from 'next/image';

const ServiceCard = ({ title, description, imageSrc, imageAlt }) => {
    return (
        <div className={styles.card}>
            {imageSrc && ( // Renderiza la imagen solo si se proporciona un src
                <div className={styles.imageContainer}>
                    <Image
                        src={imageSrc}
                        alt={imageAlt || title} // Usa el título como alt si no se proporciona imageAlt
                        width={400} // Ajusta el ancho según tus necesidades
                        height={300} // Ajusta la altura según tus necesidades
                        layout="responsive"
                        objectFit="cover"
                        className={styles.cardImage}
                    />
                </div>
            )}
            <div className={styles.cardContent}>
                <h3 className={styles.cardTitle}>{title}</h3>
                <p className={styles.cardDescription}>{description}</p>
            </div>
        </div>
    );
};

export default ServiceCard;