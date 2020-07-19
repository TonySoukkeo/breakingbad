import CharacterTypes from "./character.constants";

const CHARACTER_INITIAL_STATE = {};

const CharacterReducer = (state = CHARACTER_INITIAL_STATE, action) => {
  switch (action.type) {
    case CharacterTypes.GET_CHARACTER_SUCCESS:
      return {
        ...state,
        character: action.payload,
      };
    case CharacterTypes.GET_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default CharacterReducer;
