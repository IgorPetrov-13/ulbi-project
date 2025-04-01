import React, { useEffect, useRef, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Modal.module.scss';
import { time } from 'console';

interface ModalProps {
  className?: string;
  children?: React.ReactNode;
  isOpen?: boolean;
  onClose?: () => void;
}

export const Modal = ({ className, children, isOpen, onClose }: ModalProps) => {
  const [isClosing, setIsClosing] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const ANIMATION_DELAY = 300;

  const mods: Record<string, boolean> = {
    [cls.opened]: isOpen,
    [cls.isClosing]: isClosing,
  };

  const closeModalHandler = () => {
    if (onClose) {
      setIsClosing(true);
      timerRef.current = setTimeout(() => {
        onClose();
        setIsClosing(false);
      }, ANIMATION_DELAY);
    }
  };

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  const onKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModalHandler();
    }
  };

  useEffect(() => {
    if (isOpen) {
      window.addEventListener('keydown', onKeyDown);
    }
    return () => {
      clearTimeout(timerRef.current);
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isOpen]);

  

  return (
    <div className={classNames(cls.Modal, mods, [className])}>
      <div className={cls.overlay} onClick={closeModalHandler}>
        <div className={cls.content} onClick={onContentClick}>
          <p style={{ color: 'red' }}>Modal</p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, adipisci.
          {children}
        </div>
      </div>
    </div>
  );
};
