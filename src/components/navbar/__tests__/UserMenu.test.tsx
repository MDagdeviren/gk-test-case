import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMenu from '../UserMenu';
import { BrowserRouter } from 'react-router-dom';

describe('UserMenu', () => {
  test('renders UserMenu component with expected links', () => {
    render(
      <BrowserRouter>
        <UserMenu />
      </BrowserRouter>,
    );
    expect(screen.getByText('Kiracılar İçin')).toBeInTheDocument();
    expect(screen.getByText('Ev Sahipleri İçin')).toBeInTheDocument();
    expect(screen.getByText('Kiralama Rehberi')).toBeInTheDocument();
    expect(screen.getByText('Yardım')).toBeInTheDocument();
  });

  test('renders UserMenu component with the user avatar', () => {
    render(
      <BrowserRouter>
        <UserMenu />
      </BrowserRouter>,
    );
    expect(screen.getByAltText('User Menu')).toBeInTheDocument();
  });
});
