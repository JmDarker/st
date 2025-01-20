import ServiceCard from './ServiceCard';
import styles from './Services.module.css';

const Services = () => {
    const servicesData = [
        {
            title: 'Soporte Técnico Remoto',
            description: 'Solucionamos tus problemas informáticos de forma rápida y eficiente a través de asistencia remota. Diagnóstico, resolución de problemas de software, configuración de equipos y mucho más, todo sin necesidad de una visita presencial.',
            imageSrc: '/images/services/remote-support.jpg',
            imageAlt: 'Soporte técnico remoto',
        },
        {
            title: 'Mantenimiento Preventivo',
            description: 'Realizamos mantenimiento periódico para prevenir fallos y optimizar el rendimiento de tus equipos. Limpieza de hardware, actualizaciones de software, revisiones de seguridad y optimización del sistema para un funcionamiento óptimo.',
            imageSrc: '/images/services/maintenance.jpg',
            imageAlt: 'Mantenimiento preventivo',
        },
        {
            title: 'Seguridad Informática',
            description: 'Protegemos tus datos y sistemas contra amenazas cibernéticas con soluciones de seguridad robustas. Implementación de firewalls, antivirus, antimalware, copias de seguridad y auditorías de seguridad para proteger tu información sensible.',
            imageSrc: '/images/services/security.jpg',
            imageAlt: 'Seguridad informática',
        },
                {
            title: 'Instalación y configuración de Software',
            description: 'Instalamos y configuramos el software que necesitas para tu empresa u hogar. Sistemas operativos, software de ofimática, aplicaciones especializadas y mucho más. Nos aseguramos de que todo funcione correctamente.',
            imageSrc: '/images/services/software.jpg',
            imageAlt: 'Instalación y configuración de Software',
        },
                {
            title: 'Redes y Comunicaciones',
            description: 'Diseñamos, implementamos y mantenemos redes informáticas para tu empresa. Cableado estructurado, configuración de routers, switches, redes inalámbricas y soluciones de conectividad para una comunicación eficiente.',
            imageSrc: '/images/services/network.jpg',
            imageAlt: 'Redes y Comunicaciones',
        },
                {
            title: 'Recuperación de Datos',
            description: 'Recuperamos datos perdidos debido a fallos de hardware, borrados accidentales o ataques de ransomware. Contamos con herramientas y técnicas especializadas para maximizar las posibilidades de recuperación.',
            imageSrc: '/images/services/data-recovery.jpg',
            imageAlt: 'Recuperación de Datos',
        },
        // ... más servicios
    ];

    return (
        <section className={styles.services}>
            <div className={styles.container}>
                <h2 className={styles.title}>Nuestros Servicios</h2>
                <div className={styles.cardGrid}>
                    {servicesData.map((service) => (
                        <ServiceCard key={service.title} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;