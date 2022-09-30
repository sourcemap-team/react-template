import React from 'react';

import { ErrorBoundary } from './ErrorBoundary';
import { RouterProvider } from './RouterProvider';
import { ThemeProvider } from './ThemeProvider';

const withProviders = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
    <RouterProvider>
        <ErrorBoundary>
            <ThemeProvider>
                <Component {...props} />
            </ThemeProvider>
        </ErrorBoundary>
    </RouterProvider>
);

export default withProviders;
