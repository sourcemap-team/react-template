import React, { FC, Suspense } from 'react';
import cn from 'classnames';

import { Navbar } from 'widgets/Navbar';
import { useTheme } from 'shared/lib/theme/useTheme';
import withProviders from './providers';
import { AppRoutes } from './settings';

import 'shared/config/i18n/i18n';

import './styles/index.scss';

const App: FC = () => {
    const { theme } = useTheme();

    return (
        <Suspense fallback="">
            <div className={cn('app', theme)}>
                <Navbar />
                <AppRoutes />
            </div>
        </Suspense>
    );
};

export default withProviders(App);
