import React from 'react';
import Head from 'next/head';
import Script from 'next/script'; 
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import { ReactLenis } from '@studio-freight/react-lenis';
import '../styles/global.css'
import BackgroundAnimation from '@/components/ui/background-animation';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',);

const App: React.FC<AppProps> = ({ Component, pageProps }) => {

  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      window.gtag('config', 'G-Y76V61BQJ8', {
        page_path: url,
      });
    };
    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=G-Y76V61BQJ8`}
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-Y76V61BQJ8');
        `}
      </Script>

      <Head>
        <title>Gabriele La Piana — Front End Developer</title>
        <meta name="description" content="Welcome to my portfolio, where I showcase my personal projects." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Gabriele La Piana — Front End Developer" />
        <meta property="og:description" content="Welcome to my portfolio, where I showcase my personal projects." />
        <meta property="og:image" content="/path-to-your-image.jpg" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gabrielelapiana.dev" />
        <link rel="canonical" href="https://gabrielelapiana.dev" />
        <link rel="icon" href="/favicon.ico" />

      </Head>

        <ReactLenis root>
      <BackgroundAnimation />
      <Component {...pageProps} />
        </ReactLenis>
    </>
  );
};

export default App;