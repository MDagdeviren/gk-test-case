import React from 'react';
import NavLink from 'src/components/navbar/NavLink';

const UserMenu = () => {
  return (
    <nav className='relative'>
      <div className='flex flex-row items-center gap-3'>
        <NavLink to='#'>Kiracılar İçin</NavLink>
        <NavLink to='#'>Ev Sahipleri İçin</NavLink>
        <NavLink to='#'>Kiralama Rehberi</NavLink>
        <NavLink to='#'>Yardım</NavLink>
        <div className='p-4 md:py-1 md:px-2 border-[1px] border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'>
          <img src='/images/menu.svg' alt='User Menu' />
          <div className='hidden md:block'>
            <img
              className='rounded-full'
              height='36'
              width='36'
              alt='Avatar'
              src={'/images/user.svg'}
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default UserMenu;
