import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './LoginForm.module.scss';
import { Button } from 'shared/ui/Button/Button';
import { Input } from 'shared/ui/Input/Input';

interface LoginFormProps {
  className?: string;
}

export const LoginForm = ({ className }: LoginFormProps) => {
  return (
    <div className={classNames(cls.LoginForm, {}, [className])}>
      <Input type="text" placeholder="login" className={cls.input}/>
      <Input type="text" placeholder="password" className={cls.input}/>
      <Button className={cls.loginBtn}>Auth</Button>
    </div>
  );
};