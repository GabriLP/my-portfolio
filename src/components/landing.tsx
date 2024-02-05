import React from 'react';

const Landing: React.FC = () => {
  return (
    <section className="h-screen flex justify-center items-center">
      <div className="w-full text-center flex flex-col gap-y-3">
        <h1 className="text-heading-1 text-9xl font-anton mb-4 flex flex-col">
          <span className="pl-[15%] text-left">Hi there, I&apos;m </span>
          <span className="pr-[15%] text-right">Gabriele La Piana.</span>
        </h1>
        <p className="text-body-1 text-text mt-4">
          Front-End Developer based in Palermo, Italy.
        </p>
      </div>
    </section>
  );
};

export default Landing;