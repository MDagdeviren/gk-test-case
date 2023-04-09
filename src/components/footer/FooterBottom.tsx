import React from 'react';
import { Link } from 'react-router-dom';

const FooterBottom = () => {
  return (
    <>
      <img
        src='/images/footer-bottom.svg'
        alt='city'
        className='hidden border-b border-white md:block'
      />

      <div className='flex flex-wrap items-center justify-between gap-2.5'>
        <div className='flex flex-wrap items-center gap-2.5 md:gap-12'>
          <p className='text-xs font-medium 2xl:text-sm'>© 2023 Tüm Hakları Saklıdır.</p>
          <div className='items-center space-y-2.5 text-white underline xs:flex xs:space-x-5 xs:space-y-0 md:space-x-8'>
            <div className='w-fit'>
              <Link to='/' className='text-xs font-medium 2xl:text-sm '>
                Gizlilik Politikası
              </Link>
            </div>
            <div className='w-fit'>
              <Link to='/' className='text-xs font-medium 2xl:text-sm '>
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
        <div className='md:space-x-30 flex items-center space-x-5'>
          <p className='text-xs font-medium 2xl:text-sm '>Versiyon: V 0.0.0.1</p>
        </div>
      </div>
    </>
  );
};

export default FooterBottom;
