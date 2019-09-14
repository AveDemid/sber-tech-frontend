import { createAction } from "redux-starter-kit";

import {
  FetchingStatus,
  SuccsessfulPayload,
  FailfullPayload
} from "./../types";

export const setFetchingStatus = createAction<FetchingStatus>(
  "Set fetching status"
);

export const receiveSuccessfulResponse = createAction<SuccsessfulPayload>(
  "Receive successful response"
);

export const receiveFailfullResponse = createAction<FailfullPayload>(
  "Receive failfull response"
);
