import { takeLatest, all, call, put } from "redux-saga/effects";

import Api from "../../util/api";
import { getEndpointURL } from "../../util/endpoints";
import { PAGE_LIMIT } from "../../util/environment";

// Action Types
import CharactersTypes from "./characters.constants";

// Actions
import {
  getCharactersFailure,
  getCharactersSuccess,
} from "./characters.actions";
import { startLoading, stopLoading } from "../ui/ui.action";

export function* getCharacters({ payload }) {
  try {
    const action = getEndpointURL("GET_CHARACTERS");

    const config = {
      params: {
        limit: PAGE_LIMIT,
        offset: payload === 0 ? 0 : payload * 12,
      },
    };

    yield put(startLoading(CharactersTypes.GET_CHARACTERS_START));

    const response = yield call(Api.getData, action, config);

    const hasMore = response.length === PAGE_LIMIT;

    yield put(getCharactersSuccess({ characters: response, hasMore }));
    yield put(stopLoading(CharactersTypes.GET_CHARACTERS_START));
  } catch (error) {
    yield put(getCharactersFailure(error.message));
    yield put(stopLoading(CharactersTypes.GET_CHARACTERS_START));
  }
}

export function* onGetCharactersStart() {
  yield takeLatest(CharactersTypes.GET_CHARACTERS_START, getCharacters);
}

export default function* () {
  yield all([call(onGetCharactersStart)]);
}
