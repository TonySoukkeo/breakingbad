// Action types
import UserTypes from "./user.constants";

const USER_INITIAL_STATE = {
  favoriteCharacters:
    JSON.parse(localStorage.getItem("favoriteCharacters")) || [],
};

const userReducer = (state = USER_INITIAL_STATE, action) => {
  switch (action.type) {
    case UserTypes.ADD_CHARACTER_TO_FAVORITES:
    case UserTypes.REMOVE_CHARACTER_FROM_FAVORITES:
      return {
        ...state,
        favoriteCharacters: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;
