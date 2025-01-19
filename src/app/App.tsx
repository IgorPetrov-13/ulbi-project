import './styles/index.scss';
import { Link } from 'react-router-dom';
import { classNames } from '../shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider/index';
import { AppRouter } from './providers/router';

function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={classNames('app', {}, [theme])}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to={'/about'}>About</Link>
      <Link to={'/'}>Main</Link>

      <AppRouter/>
    </div>
  );
}

export default App;
