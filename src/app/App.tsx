import React from 'react';
import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/index';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';
import { Sidebar } from 'widgets/Sidebar';
import { Modal } from 'shared/ui/Modal/Modal';

function App() {
  const { theme } = useTheme();

  const [isOpen, setIsOpen] = React.useState<boolean>(false);
  return (
    <div className={classNames('app', {}, [theme])}>
      <Navbar />
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}/>
      <button onClick={() => setIsOpen(true)}>Open Modal</button>
      <div className="page-content">
        <Sidebar />
        <AppRouter />
      </div>
    </div>
  );
}

export default App;
