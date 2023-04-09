//Import React, Testing Library and the Component
import React from 'react';
import { render, screen } from '@testing-library/react';
import HeartButton from '../HeartButton';

//Test Suite
describe('HeartButton', () => {
  test('it renders a button with an image of a heart', () => {
    //Render Component
    render(<HeartButton />);

    //Assert - Check if button and image are rendered
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();

    const imageElement = screen.getByAltText('heart');
    expect(imageElement).toBeInTheDocument();
  });

  test('it has the correct class names', () => {
    //Render Component
    render(<HeartButton />);

    //Assert - Check if button has the class names
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('relative');
    expect(buttonElement).toHaveClass('hover:opacity-80');
    expect(buttonElement).toHaveClass('transition');
  });
});
