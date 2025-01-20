import styles from './About.module.css';
import Image from 'next/image'; // Importa el componente Image de Next.js para optimizar imágenes

const About = () => {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <h2 className={styles.title}>Sobre Nosotros</h2>

                <div className={styles.section}>
                    <h3>Nuestra Historia</h3>
                    <p>
                        En Soluciones Tecnológicas JM, iniciamos nuestras actividades en el 2019, con el firme propósito de brindar soluciones integrales en el campo del soporte técnico y mantenimiento de sistemas informáticos. Desde nuestros comienzos, nos hemos enfocado en ofrecer un servicio de alta calidad, adaptándonos a las necesidades cambiantes del mercado y de nuestros clientes. Hemos crecido constantemente, ampliando nuestra gama de servicios y consolidándonos como un socio confiable para empresas y particulares.
                    </p>
                    <p>
                        A lo largo de nuestra trayectoria, hemos acumulado una vasta experiencia en la resolución de problemas técnicos, la implementación de soluciones innovadoras y el mantenimiento preventivo de equipos. Nos enorgullece contar con un equipo de profesionales altamente capacitados y comprometidos con la excelencia en el servicio.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>Nuestra Misión</h3>
                    <p>
                        Nuestra misión es proporcionar soluciones tecnológicas eficientes y confiables que impulsen el crecimiento y la productividad de nuestros clientes. Nos esforzamos por superar sus expectativas, ofreciendo un servicio personalizado y de alta calidad, basado en la innovación, la experiencia y el compromiso con la excelencia.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>Nuestra Visión</h3>
                    <p>
                        Aspiramos a ser la empresa líder en soluciones tecnológicas en Colombia, reconocida por nuestra excelencia en el servicio, la innovación constante y el compromiso con la satisfacción del cliente. Buscamos ser un referente en el sector, generando valor a través de soluciones integrales y personalizadas que contribuyan al éxito de nuestros clientes.
                    </p>
                </div>

                <div className={styles.section}>
                    <h3>Nuestro Equipo</h3>
                    <div className={styles.teamGrid}>
                        <div className={styles.teamMember}>
                            <Image
                                src="/images/team/miembro1.jpg" // Ruta a la imagen
                                alt="Nombre del miembro 1"
                                width={200} // Ancho de la imagen
                                height={200} // Alto de la imagen
                                className={styles.teamImage}
                            />
                            <h4>Juan Munar</h4>
                            <p>Tecnico de soporte.</p>
                        </div>
                        <div className={styles.teamMember}>
                            <Image
                                src="/images/team/miembro2.jpg" // Ruta a la imagen
                                alt="Nombre del miembro 2"
                                width={200} // Ancho de la imagen
                                height={200} // Alto de la imagen
                                className={styles.teamImage}
                            />
                            <h4>Oscar Capera</h4>
                            <p>Tecnico de soporte.</p>
                        </div>
                        {/* Agrega más miembros del equipo aquí */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;