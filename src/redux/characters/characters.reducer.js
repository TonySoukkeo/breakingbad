import CharactersTypes from "./characters.constants";

const CHARACTERS_INITIAL_STATE = {
  results: {
    characters: [],
    hasMore: false,
  },
};

const CharactersReducer = (state = CHARACTERS_INITIAL_STATE, action) => {
  switch (action.type) {
    case CharactersTypes.GET_CHARACTERS_SUCCESS:
      return {
        ...state,
        results: {
          characters: [
            ...state.results.characters,
            ...action.payload.characters,
          ],
          hasMore: action.payload.hasMore,
        },
      };

    case CharactersTypes.GET_CHARACTER_FAILURE:
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};

export default CharactersReducer;
