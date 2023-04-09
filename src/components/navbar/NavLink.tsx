import React from 'react';
import { Link } from 'react-router-dom';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
}

const NavLink: React.FC<NavLinkProps> = (props) => {
  const { to, children } = props;

  return (
    <Link
      to={to}
      className='text-gravel hidden md:block text-base lg:text-lg font-medium px-1 py-3 lg:px-4 whitespace-nowrap'
    >
      {children}
    </Link>
  );
};
export default NavLink;
