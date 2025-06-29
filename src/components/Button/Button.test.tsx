// Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { Button } from './Button';

describe('Button', () => {
  test('renders with correct label', () => {
    render(<Button label="Click Me" />);
    expect(screen.getByText('Click Me')).toBeDefined();
  });

  test('calls onClick when clicked', () => {
    const handleClick = jest.fn();
    render(<Button label="Click Me" onClick={handleClick} />);
    fireEvent.click(screen.getByText('Click Me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
