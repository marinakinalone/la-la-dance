import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
