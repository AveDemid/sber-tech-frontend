import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { rootReducer as reducer } from "./root-reducer";

const middleware = [...getDefaultMiddleware()];

export const store = configureStore({ reducer, middleware });
