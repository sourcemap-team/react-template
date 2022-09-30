import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher/ThemeSwitcher';

import styles from './Navbar.module.scss';

export const Navbar = () => (
    <div className={cn(styles.container)}>
        <Link to="/">Главная</Link>
        <Link to="/about">О нас</Link>
        <ThemeSwitcher />
    </div>
);
