import { all, call } from "redux-saga/effects";

// Sagas
import charactersSagas from "../redux/characters/characters.saga";
import characterSagas from "../redux/character/character.saga";

export default function* () {
  yield all([call(charactersSagas), call(characterSagas)]);
}
