import React from "react";
import { Redirect } from "react-router-dom";
import { renderRoutes } from "react-router-config";

const routes = [
  {
    component: () => <h1>Hello sber-tech :)</h1>,
    path: "/home",
    exact: true
  },
  {
    component: () => <Redirect to="/" />
  }
];

export const Routes = () => <>{renderRoutes(routes)}</>;
