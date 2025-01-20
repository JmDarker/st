import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="es"> {/* Define el idioma del documento */}
        <Head>
          {/* Aquí puedes agregar meta tags globales, links a CSS externos, etc. */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet" />
          {/* Meta tags para redes sociales (ejemplo) */}
          <meta property="og:title" content="Soluciones Tecnológicas JM" />
          <meta property="og:description" content="Soluciones integrales en soporte técnico informático." />
          <meta property="og:image" content="/images/logo.png" /> {/* Ruta a tu logo */}
          <meta property="og:url" content="https://tusitio.com" /> {/* URL de tu sitio */}
        </Head>
        <body>
          <Main /> {/* Componente principal que renderiza tu aplicación */}
          <NextScript /> {/* Componente necesario para que Next.js funcione correctamente */}
        </body>
      </Html>
    );
  }
}

export default MyDocument;