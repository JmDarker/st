import styles from './Hero.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className={styles.hero}>
            <div className={styles.heroContent}>
                <div className={styles.imageContainer}>
                    <Image
                        src="/images/hero-image.jpg" // Ruta a tu imagen hero
                        alt="Imagen representativa de Soluciones Tecnológicas JM"
                        width={1200} // Ancho de la imagen (ajusta según tu imagen)
                        height={600} // Alto de la imagen (ajusta según tu imagen)
                        layout="responsive" // Para que la imagen se ajuste al contenedor
                        objectFit="cover" // Para que la imagen cubra todo el contenedor sin deformarse
                        priority // Prioriza la carga de esta imagen
                        className={styles.heroImage}
                    />
                </div>
                <div className={styles.textContainer}>
                    <h1 className={styles.heroTitle}>Soluciones Tecnológicas JM</h1>
                    <p className={styles.heroDescription}>
                        Expertos en soporte técnico, mantenimiento de sistemas y soluciones informáticas integrales para empresas y particulares.
                    </p>
                    <Link href="/contacto">
                      <button className={styles.heroButton}>Contáctanos</button>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default Hero;