// pages/servicios.js
import Layout from '../components/Layout/Layout';
import Services from '../components/Services/Services';
import Head from 'next/head';

const ServiciosPage = () => {
    return (
        <>
            <Head>
                <title>Servicios - Soluciones Tecnológicas JM</title>
                <meta name="description" content="Descubre nuestros servicios de soporte técnico, mantenimiento preventivo, seguridad informática y mucho más." />
            </Head>
            <Layout>
                <Services />
            </Layout>
        </>
    );
};

export default ServiciosPage;