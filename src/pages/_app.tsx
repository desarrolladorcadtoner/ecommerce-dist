import '../styles/tailwind.css';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext';
import 'primereact/resources/themes/lara-light-blue/theme.css';/* O el tema que estés utilizando */
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CartProvider>
      <Component {...pageProps} />
    </CartProvider>
  );
}

export default MyApp;