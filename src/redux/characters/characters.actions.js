import CharacterTypes from "./characters.constants";

export const getCharactersStart = (page) => ({
  type: CharacterTypes.GET_CHARACTERS_START,
  payload: page,
});

export const getCharactersSuccess = (payload) => ({
  type: CharacterTypes.GET_CHARACTERS_SUCCESS,
  payload,
});

export const getCharactersFailure = (error) => ({
  type: CharacterTypes.GET_CHARACTER_FAILURE,
  payload: error,
});
