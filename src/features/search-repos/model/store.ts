/* eslint-disable @typescript-eslint/camelcase */
import { createReducer, PayloadAction } from "redux-starter-kit";

import {
  setFetchingStatus,
  receiveSuccessfulResponse,
  receiveFailfullResponse
} from "./actions";

import {
  FetchingStatus,
  SuccsessfulPayload,
  FailfullPayload,
  Store
} from "./../types";

const initialState = {
  fetchingStatus: "initial",
  incompleteResults: null,
  totalCount: null,
  itemsById: null,
  itemsIds: null,
  error: null
} as Store;

export const reducer = createReducer<Store>(initialState, {
  [`${setFetchingStatus}`]: (
    state,
    { payload }: PayloadAction<FetchingStatus>
  ): Store => ({
    ...state,
    fetchingStatus: payload
  }),
  [`${receiveSuccessfulResponse}`]: (
    state,
    { payload }: PayloadAction<SuccsessfulPayload>
  ): Store => ({
    ...state,
    ...payload,
    error: null
  }),
  [`${receiveFailfullResponse}`]: (
    state,
    { payload: { error } }: PayloadAction<FailfullPayload>
  ): Store => ({
    ...state,
    incompleteResults: null,
    totalCount: null,
    itemsById: null,
    itemsIds: null,
    error
  })
});
