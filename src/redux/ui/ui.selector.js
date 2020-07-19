import { createSelector } from "reselect";

const select = (state) => state.ui;

const selectLoader = createSelector(select, (ui) => ui.loader);

const selectActions = createSelector(selectLoader, (loader) => loader.actions);

export const checkIfLoading = (type) => {
  return createSelector(selectActions, (actions) =>
    actions.some((action) => type.includes(action.name))
  );
};
