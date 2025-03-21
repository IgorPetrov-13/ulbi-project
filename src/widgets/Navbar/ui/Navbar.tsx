import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ ThemeSwitcher';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
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
