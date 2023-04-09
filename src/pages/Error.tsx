import React from 'react';

const Error = () => {
  return (
    <section>
      <div className='mx-auto max-w-screen-xl px-4 py-8 lg:px-6 lg:py-16'>
        <div className='mx-auto max-w-screen-sm text-center'>
          <h1 className='mb-4 text-7xl font-extrabold tracking-tight text-[#006AFF] lg:text-9xl'>
            404
          </h1>
          <p className='mb-4 text-3xl font-bold tracking-tight  md:text-4xl'>Somethings missing.</p>
          <p className='mb-4 text-lg font-light text-gray-500 dark:text-gray-400'>
            Sorry, we cant find that page
          </p>
        </div>
      </div>
    </section>
  );
};

export default Error;
