import '../styles/tailwind.css';
import '../styles/global.css';
import { AppProps } from 'next/app';
import { CartProvider } from '@/context/CartContext';
import { AuthProvider } from "@/context/AuthContext";
import 'primereact/resources/themes/lara-light-indigo/theme.css';/* O el tema que estés utilizando */
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <CartProvider>
        <Component {...pageProps} />
      </CartProvider>
    </AuthProvider>
    
  );
}

export default MyApp;