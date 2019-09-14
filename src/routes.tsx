import React from "react";
import { renderRoutes } from "react-router-config";

import { routes } from "@pages/routes";

export const Routes = () => <>{renderRoutes(routes())}</>;
