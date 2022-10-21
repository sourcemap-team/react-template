import React from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';

import { APP_ROUTES } from 'shared/config/routes';

import styles from './Navbar.module.scss';

export const Navbar = () => (
    <div className={cn(styles.container)}>
        <Link to={APP_ROUTES.INDEX}>Main</Link>
        <Link to={APP_ROUTES.LOGIN}>Login</Link>
    </div>
);
