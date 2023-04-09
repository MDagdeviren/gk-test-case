import React from 'react';

const HeartButton = () => {
  return (
    <button className='relative transition hover:opacity-80'>
      <img src='/images/heart.svg' alt='heart' />
    </button>
  );
};

export default HeartButton;
