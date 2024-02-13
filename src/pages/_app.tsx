import React from 'react';
import { AppProps } from 'next/app';
import '../styles/global.css'
import BackgroundAnimation from '@/components/ui/background-animation';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <BackgroundAnimation />
      <Component {...pageProps} />
    </>
  );
};

export default App;