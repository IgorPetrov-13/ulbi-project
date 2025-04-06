import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Button, ThemeButton } from './Button';

describe('Button component test', () => {
  test('text render', () => {
    render(<Button>TEST</Button>);
    expect(screen.getByText('TEST')).toBeInTheDocument();
  });

  test('with mods', () => {
    render(<Button theme={ThemeButton.CLEAR}>TEST</Button>);
    expect(screen.getByText('TEST')).toHaveClass('clear');
  });
});
