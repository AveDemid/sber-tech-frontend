import { AnyAction } from "redux";
import { ThunkAction } from "redux-thunk";

import { SearchReposApiConfiguration, SearchRepos } from "./../types";
import { searchRepos } from "./../api";

import {
  setFetchingStatus,
  receiveSuccessfulResponse,
  receiveFailfullResponse
} from "./actions";

import { getSearchReposById, getSearchReposIds } from "./lenses";

export const searchReposEffect = (
  config: SearchReposApiConfiguration
): ThunkAction<void, undefined, undefined, AnyAction> => dispatch => {
  dispatch(setFetchingStatus("loading"));

  searchRepos<SearchRepos>(config)
    .then(response => {
      const itemsById = getSearchReposById(response);
      const itemsIds = getSearchReposIds(response);

      dispatch(
        receiveSuccessfulResponse({
          incompleteResults: response.incomplete_results,
          totalCount: response.total_count,
          itemsById,
          itemsIds
        })
      );

      dispatch(setFetchingStatus("done"));
    })
    .catch((error: Error) => {
      dispatch(receiveFailfullResponse({ error: error.message }));
      dispatch(setFetchingStatus("failed"));
    });
};

export const effects = {
  searchReposEffect
};
