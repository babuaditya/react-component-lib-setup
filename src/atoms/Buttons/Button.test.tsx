import React from 'react';

import { render, screen, fireEvent } from '@testing-library/react';
import Button from './Buttons'; 

describe('Button Component', () => {
  it('should render the button with the correct label', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('should trigger onClick function when clicked', () => {
    const onClickMock = jest.fn(); 
    
    render(<Button label="Click Me" onClick={onClickMock} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply additional className when passed', () => {
    render(<Button label="Click Me" onClick={() => {}} className="bg-secondary-500" />);
    
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-500');
  });

  it('should render with default styles when no className is passed', () => {
    render(<Button label="Click Me" onClick={() => {}} />);
    
    expect(screen.getByRole('button')).toHaveClass('px-4 py-2 bg-primary-500 text-white rounded');
  });
});
