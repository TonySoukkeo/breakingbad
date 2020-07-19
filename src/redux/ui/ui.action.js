import UiTypes from "./ui.constants";

export const startLoading = (name, params) => ({
  type: UiTypes.START_LOADING,
  payload: {
    action: {
      name,
      params,
    },
  },
});

export const stopLoading = (name) => ({
  type: UiTypes.STOP_LOADING,
  payload: { name },
});
