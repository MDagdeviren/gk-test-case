import React from 'react';
import { Link } from 'react-router-dom';

interface FooterLinkProps {
  to: string;
  children: React.ReactNode;
}

const FooterLink: React.FC<FooterLinkProps> = (props) => {
  const { to, children } = props;

  return (
    <Link to={to} className='block text-base font-medium text-white lg:text-lg '>
      {children}
    </Link>
  );
};
export default FooterLink;
