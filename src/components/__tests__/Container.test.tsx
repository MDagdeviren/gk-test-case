import React from 'react';
import { render } from '@testing-library/react';
import Container from '../Container';

describe('Container', () => {
  it('Renders Container with children', () => {
    const { getByRole } = render(
      <Container>
        <h1>Test children</h1>
      </Container>,
    );
    expect(getByRole('heading')).toHaveTextContent('Test children');
  });

  it('Contains expected className', () => {
    const { getByRole } = render(
      <Container>
        <div>Test children</div>
      </Container>,
    );
    expect(getByRole('container')).toHaveClass(
      'max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-4 px-2',
    );
  });
});
