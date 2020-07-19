import { createSelector } from "reselect";

const select = (state) => state.characters;

const selectResults = createSelector(
  select,
  (characters) => characters.results
);

export const selectCharacters = createSelector(
  selectResults,
  (results) => results.characters
);

export const selectHasMore = createSelector(
  selectResults,
  (results) => results.hasMore
);
