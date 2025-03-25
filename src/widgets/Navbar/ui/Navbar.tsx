import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ ThemeSwitcher';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  return (
    <div className={classNames(cls.Navbar, {}, [className])}>
      <ThemeSwitcher />
      <div className={cls.links}>
        <AppLink to={RoutePath.about} className={cls.link}>
          About
        </AppLink>
        <AppLink to={RoutePath.main} className={cls.link}>
          Main
        </AppLink>
      </div>
    </div>
  );
};
