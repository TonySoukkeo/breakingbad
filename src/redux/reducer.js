import { combineReducers } from "redux";

import CharactersReducer from "./characters/characters.reducer";
import CharacterReducer from "./character/character.reducer";
import UiReducer from "./ui/ui.reducer";
import UserReducer from "./user/user.reducer";

const rootReducer = combineReducers({
  characters: CharactersReducer,
  character: CharacterReducer,
  ui: UiReducer,
  user: UserReducer,
});

export default rootReducer;
