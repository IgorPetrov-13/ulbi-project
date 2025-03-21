import { classNames } from 'shared/lib/classNames/classNames';
import cls from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

interface AppLinkProps extends LinkProps {
  className?: string;
  theme?: AppLinkTheme;
}
export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}
export const AppLink: FC<AppLinkProps> = (props) => {
  const { to, className, children, theme, ...otherProps } = props;
  return (
    <Link
      to={to}
      className={classNames(cls.AppLink, {}, [className, cls[theme || AppLinkTheme.PRIMARY]])}
      {...otherProps}
    >
      {children}
    </Link>
  );
};
