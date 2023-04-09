import React from 'react';

const MobileApp = () => {
  return (
    <div className='mt-4 flex xl:justify-end'>
      <div className='flex flex-wrap  gap-2.5'>
        <img src='/images/app-gallery.png' alt='App Galery' />
        <img src='/images/app-appstore.png' alt='App Store' />
        <img src='/images/app-google-play.png' alt='Google Play' />
      </div>
    </div>
  );
};

export default MobileApp;
