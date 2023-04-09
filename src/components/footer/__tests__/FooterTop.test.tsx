import React from 'react';
import { render } from '@testing-library/react';
import FooterTop, { data } from '../FooterTop';
import { BrowserRouter } from 'react-router-dom';
describe('FooterTop', () => {
  it('renders correctly', () => {
    const { getByText, getByAltText } = render(
      <BrowserRouter>
        <FooterTop />
      </BrowserRouter>,
    );
    const logo = getByAltText('Logo');
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', '/images/logo-white.svg');

    const companyText = getByText('Kiramkolay Bilişim Teknolojileri A.Ş.');
    expect(companyText).toBeInTheDocument();

    data.forEach((link) => {
      const linkElement = getByText(link.title);
      expect(linkElement).toBeInTheDocument();
    });
  });
});
