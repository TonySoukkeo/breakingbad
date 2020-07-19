import { put, all, call, takeLatest } from "redux-saga/effects";

import { getEndpointURL } from "../../util/endpoints";
import api from "../../util/api";

import CharacterTypes from "./character.constants";
import { getCharacterSuccess, getCharacterFailure } from "./character.actions";

export function* getCharacter({ payload }) {
  try {
    const action = getEndpointURL("GET_CHARACTERS");

    const config = {
      url: `/${payload}`,
    };

    const character = yield call(api.getData, action, config);

    yield put(getCharacterSuccess(character[0]));
  } catch (error) {
    yield put(getCharacterFailure(error));
  }
}

export function* onGetCharacterStart() {
  yield takeLatest(CharacterTypes.GET_CHARACTER_START, getCharacter);
}

export default function* () {
  yield all([call(onGetCharacterStart)]);
}
