import React, { useEffect, useCallback } from 'react';
import Head from 'next/head';
import Script from 'next/script';
import { useRouter } from 'next/router';
import { AppProps } from 'next/app';
import Lenis from 'lenis';
import { ThemeProvider } from '@/components/theme-provider';
import emailjs from '@emailjs/browser';
import '../styles/animation.css';
import '../styles/global.css';
import BackgroundAnimation from '@/components/ui/background-animation';
import ThemeToggle from '@/components/theme-toggle';
import Navbar from '@/components/navbar';

// EmailJS Initialization
if (!process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY) {
  console.error('EmailJS Public Key is missing.');
} else {
  emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY);
}

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === 'function') {
        window.gtag('config', 'G-Y76V61BQJ8', {
          page_path: url,
        });
      }
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

  const handleButtonInteraction = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      button.style.setProperty('--x', `${x}px`);
      button.style.setProperty('--y', `${y}px`);

      if (e.type === 'click') {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple');
        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;
        button.appendChild(ripple);

        ripple.addEventListener('animationend', () => {
          ripple.remove();
        });
      }
    },
    []
  );

  return (
    <>
      <Script strategy="afterInteractive" src="https://www.googletagmanager.com/gtag/js?id=G-Y76V61BQJ8" />
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
      <link
        href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap"
        rel="stylesheet"
      />
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <BackgroundAnimation />
        <Navbar />
        <ThemeToggle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
};

export default App;