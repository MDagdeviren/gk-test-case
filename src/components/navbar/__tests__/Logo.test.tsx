import React from 'react';
import { render } from '@testing-library/react';
import Logo from '../Logo';

describe('Logo', () => {
  it('renders logo image', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('Logo');
    expect(logoImage).toBeInTheDocument();
  });

  it('uses correct image source', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('Logo');
    expect(logoImage.getAttribute('src')).toContain('/images/logo.svg');
  });

  it('has correct classnames', () => {
    const { getByAltText } = render(<Logo />);
    const logoImage = getByAltText('Logo');
    expect(logoImage).toHaveClass('h-9 lg:h-12 w-52 lg:w-[270px] cursor-pointer');
  });
});
