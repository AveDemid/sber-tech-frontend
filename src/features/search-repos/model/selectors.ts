import { createSelector } from "reselect";
import { AppState } from "./../../../root-reducer";
import { Store } from "../types";

const rootSelector = createSelector<AppState, Store, Store>(
  state => state.searchRepos,
  root => root
);

const getFetchingStatus = createSelector(
  rootSelector,
  root => root.fetchingStatus
);

const getIncompleteResults = createSelector(
  rootSelector,
  root => root.incompleteResults
);

const getTotalCount = createSelector(
  rootSelector,
  root => root.totalCount
);

const getItemsIds = createSelector(
  rootSelector,
  root => root.itemsIds
);

const getItemsById = createSelector(
  rootSelector,
  root => root.itemsById
);

const getError = createSelector(
  rootSelector,
  root => root.error
);

export const selecotrs = {
  getFetchingStatus,
  getIncompleteResults,
  getTotalCount,
  getItemsIds,
  getItemsById,
  getError
};
