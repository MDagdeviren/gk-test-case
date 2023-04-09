import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div role='container' className='mx-auto max-w-[2520px] px-2 sm:px-4 md:px-10 xl:px-20'>
      {children}
    </div>
  );
};

export default Container;