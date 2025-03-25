import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Sidebar.module.scss';
import { useState } from 'react';
import { AppLink } from 'shared/ui/AppLink/AppLink';
import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import WriteIcon from 'shared/assets/icons/write-icon.svg';

interface SidebarProps {
  className?: string;
}

export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const onToggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
    >
      <div className={cls.sidebarInner}>
        <div className={cls.item}>
          <AppLink to={RoutePath.main} className={cls.link}>
            <WriteIcon className={cls.icon} />
            <span className={cls.link_text}>link1</span>
          </AppLink>
        </div>

        <div className={cls.item}>
          <AppLink to={RoutePath.main} className={cls.link}>
            <WriteIcon className={cls.icon} />
            <span className={cls.link_text}>link2</span>
          </AppLink>
        </div>
      </div>

      <button
        data-testid="sidebar-toggle"
        onClick={onToggle}
        type="button"
        className={cls.collapseBtn}
      >
        {collapsed ? '>' : '<'}
      </button>
    </div>
  );
};
