import { Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';

interface NavbarProps {
  className?: string;
}
console.log('cls', cls);

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <div className={cls.links}>
        <AppLink to={'/about'} className={cls.link}>
          About
        </AppLink>
        <AppLink to={'/'} className={cls.link}>
          Main
        </AppLink>
      </div>
    </div>
  );
};
