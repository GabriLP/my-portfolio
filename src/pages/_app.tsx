import React from 'react';
import { AppProps } from 'next/app';
import { ReactLenis } from '@studio-freight/react-lenis';
import '../styles/global.css'
import BackgroundAnimation from '@/components/ui/background-animation';
import emailjs from '@emailjs/browser';

emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || '',);

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
        <ReactLenis root>
      <BackgroundAnimation />
      <Component {...pageProps} />
        </ReactLenis>
    </>
  );
};

export default App;