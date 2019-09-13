import { combineReducers } from "redux";

export const rootReducer = combineReducers({
  just4Test: () => 42
});

export type AppState = ReturnType<typeof rootReducer>;
