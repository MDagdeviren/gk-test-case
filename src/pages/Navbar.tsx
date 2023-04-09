import React from 'react';
import { Link } from 'react-router-dom';

// ** Components
import Container from 'src/components/Container';
import Logo from 'src/components/navbar/Logo';
import UserMenu from 'src/components/navbar/UserMenu';

const Navbar = () => {
  return (
    <header className='fixed z-10 w-full bg-white shadow-sm'>
      <div className='border-b-[1px] py-2'>
        <Container>
          <div className='flex flex-row items-center justify-between gap-3 md:gap-0'>
            <Link to='/'>
              <Logo />
            </Link>
            <UserMenu />
          </div>
        </Container>
      </div>
    </header>
  );
};

export default Navbar;
