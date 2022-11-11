import React from "react";
import { Route, Routes } from "react-router-dom";

import { PersistLogin, Prefetch } from "app/providers/RouterProvider";

import { MainPage } from "pages/MainPage";
import { NotFoundPage } from "pages/NotFoundPage";
import { LoginPage } from "pages/LoginPage";
import { ErrorPage } from "pages/ErrorPage";

import { Navbar } from "widgets/Navbar";
import { Header } from "widgets/Header";

import { Layout } from "shared/ui/Layout/Layout";
import { APP_ROUTES } from "shared/config/routes";

export const AppRoutes = () => (
  <Routes>
    <Route element={<PersistLogin />}>
      <Route element={<Prefetch />}>
        <Route
          path={APP_ROUTES.INDEX}
          element={<Layout sider={<Navbar />} header={<Header />} />}
        >
          <Route index element={<MainPage />} />
        </Route>
      </Route>
    </Route>
    <Route path={APP_ROUTES.INDEX} element={<Layout.Additional />}>
      <Route path={APP_ROUTES.LOGIN} element={<LoginPage />} />
      <Route path={APP_ROUTES.ERROR} element={<ErrorPage />} />
      <Route path={APP_ROUTES.ANY} element={<NotFoundPage />} />
    </Route>
  </Routes>
);
