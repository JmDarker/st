// pages/nosotros.js (o pages/about.js)
import Layout from '../components/Layout/Layout';
import About from '../components/About/About';
import Head from 'next/head';

const NosotrosPage = () => {
    return (
        <>
            <Head>
                <title>Sobre Nosotros - Soluciones Tecnológicas JM</title>
                <meta name="description" content="Conoce la historia, misión, visión y equipo de Soluciones Tecnológicas JM, tu aliado en soluciones informáticas." />
            </Head>
            <Layout>
                <About />
            </Layout>
        </>
    );
};

export default NosotrosPage;