import React from 'react';
import { Route, Routes } from 'react-router-dom';

import { MainPage } from 'pages/MainPage';
import { NotFoundPage } from 'pages/NotFoundPage';
import { LoginPage } from 'pages/LoginPage';
import { ErrorPage } from 'pages/ErrorPage';

import { Layout } from 'shared/ui/Layout/Layout';
import { APP_ROUTES } from 'shared/config/routes';

export const AppRoutes = () => (
    <Routes>
        <Route path={APP_ROUTES.INDEX} element={<Layout />}>
            <Route index element={<MainPage />} />
        </Route>
        <Route path={APP_ROUTES.INDEX} element={<Layout.Additional />}>
            <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
            <Route path={APP_ROUTES.ERROR} element={<ErrorPage />} />
            <Route path={APP_ROUTES.ANY} element={<NotFoundPage />} />
        </Route>
    </Routes>
);
