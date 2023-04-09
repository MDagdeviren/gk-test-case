import React from 'react';
import Container from 'src/components/Container';
import MobileApp from 'src/components/footer/MobileApp';
import FooterBottom from 'src/components/footer/FooterBottom';
import FooterTop from 'src/components/footer/FooterTop';

const Footer = () => {
  return (
    <footer className='mt-16 border-t md:mt-[120px]'>
      <div className='bg-[#181818] pb-5 pt-12 text-white md:pb-8 md:pt-[90px]'>
        <Container>
          <FooterTop />
          <MobileApp />
          <FooterBottom />
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
