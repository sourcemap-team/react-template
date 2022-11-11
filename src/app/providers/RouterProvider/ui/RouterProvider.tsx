import React, { FC, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";

export const RouterProvider: FC = ({ children }) => (
  <BrowserRouter>
    <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
  </BrowserRouter>
);
