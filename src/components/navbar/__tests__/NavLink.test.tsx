import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import NavLink from '../NavLink';

describe('NavLink', () => {
  it('renders NavLink with the given props', () => {
    const { getByText } = render(
      <BrowserRouter>
        <NavLink to='/home'>Home</NavLink>
      </BrowserRouter>,
    );
    expect(getByText('Home')).toBeInTheDocument();
  });
});
