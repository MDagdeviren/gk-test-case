import React from 'react';
import FooterLink from './FooterLink';

interface FooterMenuProps {
  title: string;
  links: {
    title: string;
    url: string;
  }[];
}

const FooterMenu = (props: FooterMenuProps) => {
  const { title, links } = props;

  return (
    <div>
      <div className='mb-5 space-y-[5px]'>
        <p className='text-base  font-semibold md:text-lg 2xl:text-xl'>{title}</p>
        <img className='h-[10px] w-[117px]' src='/images/yellow-slash.png' alt='slash' />
      </div>
      <div className='space-y-2.5'>
        {links.map((link, index) => (
          <FooterLink key={index} to={link.url}>
            {link.title}
          </FooterLink>
        ))}
      </div>
    </div>
  );
};

export default FooterMenu;
