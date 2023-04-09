import React from 'react';
import { render } from '@testing-library/react';
import Error from './Error';

describe('Error component', () => {
  it('renders the correct text', () => {
    const { getByText } = render(<Error />);
    expect(getByText('404')).toBeInTheDocument();
    expect(getByText('Somethings missing.')).toBeInTheDocument();
    expect(getByText('Sorry, we cant find that page')).toBeInTheDocument();
  });
});
