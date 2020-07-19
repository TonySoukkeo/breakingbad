import CharacterTypes from "./character.constants";

export const getCharacterStart = (characterId) => ({
  type: CharacterTypes.GET_CHARACTER_START,
  payload: characterId,
});

export const getCharacterSuccess = (character) => ({
  type: CharacterTypes.GET_CHARACTER_SUCCESS,
  payload: character,
});

export const getCharacterFailure = (error) => ({
  type: CharacterTypes.GET_CHARACTER_FAILURE,
  payload: error,
});
