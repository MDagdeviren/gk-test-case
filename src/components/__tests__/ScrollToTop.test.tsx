import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import ScrollToTop from '../ScrollToTop';

describe('ScrollToTop Component', () => {
  it('Scroll to top button is not visible at the first render', () => {
    const { queryByRole } = render(<ScrollToTop />);
    const button = queryByRole('button');
    expect(button).toBeNull();
  });

  it('Scroll to top button becomes visible after scrolling down the page', () => {
    const { queryByRole } = render(<ScrollToTop />);
    window.pageYOffset = 400;
    fireEvent.scroll(window);
    const button = queryByRole('button');
    expect(button).not.toBeNull();
  });
});
