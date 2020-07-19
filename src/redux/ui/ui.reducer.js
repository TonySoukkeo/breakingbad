import UiTypes from "./ui.constants";

const UI_INITIAL_STATE = {
  loader: {
    actions: [],
    refreshing: [],
  },
};

const UiReducer = (state = UI_INITIAL_STATE, action) => {
  switch (action.type) {
    case UiTypes.START_LOADING:
      return {
        ...state,
        loader: {
          ...state.loader,
          actions: [...state.loader.actions, action.payload.action],
        },
      };
    case UiTypes.STOP_LOADING:
      return {
        ...state,
        loader: {
          ...state.loader,
          actions: state.loader.actions.filter(
            (type) => type.name !== action.payload.name
          ),
        },
      };
    default:
      return state;
  }
};

export default UiReducer;
