import { createSelector } from "reselect";

const select = (state) => state.character;

export const selectCharacter = createSelector(
  select,
  (character) => character.character
);
