import React, { useCallback, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Navbar.module.scss';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { ThemeSwitcher } from 'widgets/ ThemeSwitcher';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import { Button, ThemeButton } from 'shared/ui/Button/Button';
import { Modal } from 'shared/ui/Modal/Modal';

interface NavbarProps {
  className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState<boolean>(false);

  const onToggleModal = useCallback(() => {
    setIsAuthModal((prevState) => !prevState);
  }, []);

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
        <Button onClick={onToggleModal} theme={ThemeButton.CLEAR_INVERTED}>
          Auth
        </Button>
        <Modal isOpen={isAuthModal} onClose={onToggleModal} />
      </div>
    </div>
  );
};
