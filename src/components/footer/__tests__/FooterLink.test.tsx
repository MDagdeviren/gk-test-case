import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import FooterLink from '../FooterLink';

const defaultProps = {
  to: '/',
  children: 'Home',
};

test('renders a link with the given props', () => {
  const { getByRole } = render(
    <Router>
      <FooterLink {...defaultProps} />
    </Router>,
  );
  const linkElement = getByRole('link');
  expect(linkElement).toHaveAttribute('href', '/');
  expect(linkElement).toHaveTextContent('Home');
});
