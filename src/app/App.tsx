import './styles/index.scss';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/index';
import { AppRouter } from './providers/router';
import { Navbar } from 'widgets/Navbar';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>

      <Navbar />
      <AppRouter />
    </div>
  );
}

export default App;
