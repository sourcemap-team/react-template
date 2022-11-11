import React, { Suspense } from "react";

import { AppRoutes } from "./settings";

import withProviders from "./providers";

import "./styles/index.scss";

const App = () => (
  <div className="app">
    <Suspense fallback="">
      <AppRoutes />
    </Suspense>
  </div>
);

export default withProviders(App);
