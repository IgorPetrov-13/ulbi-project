import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Sidebar } from './Sidebar';
import { BrowserRouter } from 'react-router-dom';

describe('Sidebar component test', () => {
  test('Sidebar should be in the document', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
    expect(screen.getByTestId('sidebar')).toBeInTheDocument();
  });

  test('Sidebar should toggle collapsed class on button click', () => {
    render(
      <BrowserRouter>
        <Sidebar />
      </BrowserRouter>
    );
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
