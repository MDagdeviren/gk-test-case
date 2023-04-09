import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import FooterBottom from '../FooterBottom';

test('renders all necessary elements', () => {
  const { getByAltText, getByText } = render(
    <BrowserRouter>
      <FooterBottom />
    </BrowserRouter>,
  );

  // check if image with proper alt text is rendered
  const cityImage = getByAltText('city');
  expect(cityImage).toBeInTheDocument();

  // check if copyright text is rendered
  const copyrightText = getByText(/© 2023 Tüm Hakları Saklıdır\./i);
  expect(copyrightText).toBeInTheDocument();

  // check if privacy policy and terms of use links are rendered
  const privacyPolicyLink = getByText(/gizlilik politikası/i);
  const termsOfUseLink = getByText(/kullanım şartları/i);
  expect(privacyPolicyLink).toBeInTheDocument();
  expect(termsOfUseLink).toBeInTheDocument();

  // check if version text is rendered
  const versionText = getByText(/versiyon: v 0\.0\.0\.1/i);
  expect(versionText).toBeInTheDocument();
});
