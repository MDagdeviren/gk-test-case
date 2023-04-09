import React from 'react';
import { render } from '@testing-library/react';
import Social from '../Social';

describe('Social', () => {
  it('renders correctly', () => {
    const { getByAltText } = render(<Social />);
    const instagramIcon = getByAltText('instagram');
    expect(instagramIcon).toBeInTheDocument();
    expect(instagramIcon).toHaveAttribute('src', '/images/instagram.svg');

    const facebookIcon = getByAltText('facebook');
    expect(facebookIcon).toBeInTheDocument();
    expect(facebookIcon).toHaveAttribute('src', '/images/facebook.svg');

    const twitterIcon = getByAltText('twitter');
    expect(twitterIcon).toBeInTheDocument();
    expect(twitterIcon).toHaveAttribute('src', '/images/twitter.svg');

    const linkedinIcon = getByAltText('linkedin');
    expect(linkedinIcon).toBeInTheDocument();
    expect(linkedinIcon).toHaveAttribute('src', '/images/linkedin.svg');
  });
});
