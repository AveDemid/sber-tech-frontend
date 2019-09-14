import { combineReducers } from "redux";
import { reducer as searchReposReducer } from "@features/search-repos";

export const rootReducer = combineReducers({
  searchRepos: searchReposReducer
});

export type AppState = ReturnType<typeof rootReducer>;
