// Action types
import UserTypes from "./user.constants";

// Util
import ls from "../../util/localStorage";

export const addCharacterToFavorites = (character) => {
  const lsAction = {
    type: "add",
    payload: character,
  };

  const favoriteCharacters = ls.setLocalStorage("favoriteCharacters", lsAction);

  return {
    type: UserTypes.ADD_CHARACTER_TO_FAVORITES,
    payload: favoriteCharacters,
  };
};

export const removeCharacterFromFavorites = (characterIdToRemove) => {
  const lsAction = {
    type: "remove",
    payload: characterIdToRemove,
  };

  const updatedFavoriteCharacters = ls.setLocalStorage(
    "favoriteCharacters",
    lsAction
  );

  return {
    type: UserTypes.REMOVE_CHARACTER_FROM_FAVORITES,
    payload: updatedFavoriteCharacters,
  };
};
