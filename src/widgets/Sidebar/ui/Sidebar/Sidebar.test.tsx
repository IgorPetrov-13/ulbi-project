import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';

describe('Sidebar component test', () => {
  test('Sidebar should be in the document', () => {
    render(<Sidebar />);
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  //!переписать после изменения кнопки
  test('Sidebar should have toggle button', () => {
    render(<Sidebar />);
    expect(screen.getByText('Toggle')).toBeInTheDocument();
  });

  test('Sidebar should toggle collapsed class on button click', () => {
    render(<Sidebar />);
    const sidebarElement = screen.getByTestId('sidebar');
    const toggleButton = screen.getByTestId('sidebar-toggle');

    // Проверяем, что изначально класс collapsed отсутствует
    expect(sidebarElement).not.toHaveClass('collapsed');

    // Кликаем на кнопку
    fireEvent.click(toggleButton);

    // Проверяем, что класс collapsed появился
    expect(sidebarElement).toHaveClass('collapsed');
  });
});
