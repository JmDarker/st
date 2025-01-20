// pages/index.js
import Layout from '../components/Layout/Layout';
import Hero from '../components/Hero/Hero';
import Services from '../components/Services/Services';
import Head from 'next/head';

export default function Home() {
    return (
        <>
            <Head>
                <title>Soluciones Tecnológicas JM - Soporte Técnico Informático</title>
                <meta name="description" content="Soluciones integrales en soporte técnico, mantenimiento de sistemas, seguridad informática y mucho más para empresas y particulares." />
                {/* Puedes agregar más meta tags aquí si lo necesitas */}
            </Head>
            <Layout>
                <Hero />
                <Services />
                {/* Aquí podrías agregar otros componentes para la página de inicio, como:
                    - Testimonios de clientes
                    - Un "Llamado a la acción" adicional
                    - Información de contacto breve
                */}
            </Layout>
        </>
    );
}