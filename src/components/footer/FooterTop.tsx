import React from 'react';
import FooterMenu from './FooterMenu';
import Social from './Social';
export const data = [
  {
    title: 'Hakkımızda',
    links: [
      {
        title: 'Güvenle Kirala Nedir?',
        url: '/',
      },
      {
        title: 'Nasıl Kullanılır?',
        url: '/',
      },
      {
        title: 'Avantajları Nelerdir?',
        url: '/',
      },
    ],
  },
  {
    title: 'Kariyer',
    links: [
      {
        title: 'Gayrimenkul Ortağı',
        url: '/',
      },
      {
        title: 'Fotoğrafçı Olmak',
        url: '/',
      },
      {
        title: 'Ödeme ve Hizmetler',
        url: '/',
      },
      {
        title: 'Süreçler ve Sözleşmeler',
        url: '/',
      },
      {
        title: 'Güvenilir Kiracı Nedir?',
        url: '/',
      },
    ],
  },
  {
    title: 'Evinizi Kirayın',
    links: [
      {
        title: 'Evimi Nasıl Kiralarım?',
        url: '/',
      },
      {
        title: 'Ödemeler ve Vergilendirme',
        url: '/',
      },
      {
        title: 'Nasıl İyi Ev Sahibi Olunur?',
        url: '/',
      },
      {
        title: 'Kullanıcı Yorumları',
        url: '/',
      },
      {
        title: 'Bilgi Merkezi',
        url: '/',
      },
    ],
  },
  {
    title: 'Yardım ve Destek',
    links: [
      {
        title: 'Sıkça Sorulan Sorular',
        url: '/',
      },
      {
        title: 'Bilgi Merkezi',
        url: '/',
      },
      {
        title: 'Destek Hattı',
        url: '/',
      },
    ],
  },
];
const FooterTop = () => {
  return (
    <div className='space-y-30 lg:flex lg:space-y-0'>
      <div className='grid w-fit flex-grow grid-cols-1 gap-16 xs:grid-cols-2 xl:grid-cols-4 xl:border-r'>
        {data.map((item, index) => (
          <FooterMenu key={index} title={item.title} links={item.links} />
        ))}
      </div>
      <div className='ml-0 mt-8 flex flex-grow flex-col justify-start space-y-5 md:space-y-12 lg:ml-16 lg:mt-0 lg:items-end'>
        <img
          src='/images/logo-white.svg'
          className='h-9 w-52 cursor-pointer lg:h-12 lg:w-[318px]'
          alt='Logo'
        />
        <p className='whitespace-nowrap text-base font-medium lg:text-lg'>
          Kiramkolay Bilişim Teknolojileri A.Ş.
        </p>
        <Social />
      </div>
    </div>
  );
};

export default FooterTop;
