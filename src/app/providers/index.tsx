import React from 'react';

import { StoreProvider } from 'app/providers/StoreProvider';
import { ErrorBoundary } from './ErrorBoundary';
import { RouterProvider } from './RouterProvider';

const withProviders = <P extends object>(Component: React.ComponentType<P>) => (props: P) => (
    <ErrorBoundary>
        <StoreProvider>
            <RouterProvider>
                <Component {...props} />
            </RouterProvider>
        </StoreProvider>
    </ErrorBoundary>

);

export default withProviders;
