import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import {Buttons} from './Buttons';

describe('Button Component', () => {
  it('should render the button with the correct label', () => {
    render(<Buttons label="Click Me" onClick={() => {}} />);
    expect(screen.getByRole('button')).toHaveTextContent('Click Me');
  });

  it('should trigger onClick function when clicked', () => {
    const onClickMock = jest.fn(); 
    
    render(<Buttons label="Click Me" onClick={onClickMock} />);
    
    fireEvent.click(screen.getByRole('button'));
    
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });

  it('should apply additional className when passed', () => {
    render(<Buttons label="Click Me" onClick={() => {}} className="bg-secondary-500" />);
    
    expect(screen.getByRole('button')).toHaveClass('bg-secondary-500');
  });

  it('should render with default styles when no className is passed', () => {
    render(<Buttons label="Click Me" onClick={() => {}} />);
    
    expect(screen.getByRole('button')).toHaveClass('btn btn-primary false false');
  });

  it('should render as a link when "as" prop is "link" and have href', () => {
    render(<Buttons label="Go to Google" as="link" href="https://google.com" />);
    
    const linkElement = screen.getByRole('link');
    expect(linkElement).toHaveTextContent('Go to Google');
    expect(linkElement).toHaveAttribute('href', 'https://google.com');
  });

  it('should apply additional className when passed as a link', () => {
    render(<Buttons label="Go to Google" as="link" href="https://google.com" />);
    
    const linkElement = screen.getByRole('link');
  });

  it('should render with default styles when no className is passed as a link', () => {
    render(<Buttons label="Go to Google" as="link" href="https://google.com" />);
    
    const linkElement = screen.getByRole('link');
  });
});
