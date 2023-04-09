import React from 'react';
import { render } from '@testing-library/react';
import FooterMenu from '../FooterMenu';
import { BrowserRouter } from 'react-router-dom';
describe('FooterMenu', () => {
  const mockTitle = 'MockTitle';
  const mockLinks = [
    {
      title: 'Link1',
      url: 'https://link1.com',
    },
    {
      title: 'Link2',
      url: 'https://link2.com',
    },
  ];

  it('renders title correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <FooterMenu title={mockTitle} links={mockLinks} />
      </BrowserRouter>,
    );
    expect(getByText(mockTitle)).toBeInTheDocument();
  });

  it('renders links correctly', () => {
    const { getByText } = render(
      <BrowserRouter>
        <FooterMenu title={mockTitle} links={mockLinks} />
      </BrowserRouter>,
    );
    mockLinks.forEach((link) => {
      expect(getByText(link.title)).toBeInTheDocument();
      expect(getByText(link.title)).toHaveAttribute('href', link.url);
    });
  });
});
