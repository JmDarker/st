// pages/_app.js
import '../styles/globals.css'; // Importa tus estilos globales
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

function MyApp({ Component, pageProps }) {
  return (
    <main className={inter.className}> {/* Aplica la fuente Inter */}
      <Component {...pageProps} />
    </main>
  );
}

export default MyApp;