import React from 'react';
import { render } from '@testing-library/react';
import MobileApp from '../MobileApp';
import { BrowserRouter } from 'react-router-dom';
describe('MobileApp', () => {
  it('renders correctly', () => {
    const { getByAltText } = render(
      <BrowserRouter>
        <MobileApp />
      </BrowserRouter>,
    );
    const appGallery = getByAltText('App Galery');
    expect(appGallery).toBeInTheDocument();
    expect(appGallery).toHaveAttribute('src', '/images/app-gallery.png');

    const appStore = getByAltText('App Store');
    expect(appStore).toBeInTheDocument();
    expect(appStore).toHaveAttribute('src', '/images/app-appstore.png');

    const googlePlay = getByAltText('Google Play');
    expect(googlePlay).toBeInTheDocument();
    expect(googlePlay).toHaveAttribute('src', '/images/app-google-play.png');
  });
});
