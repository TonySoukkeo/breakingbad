import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import CharacterShowcase from "./characters-showcase.component";

// Selectors
import {
  selectCharacters,
  selectHasMore,
} from "../../redux/characters/characters.selector";
import { checkIfLoading } from "../../redux/ui/ui.selector";

// Actions
import { getCharactersStart } from "../../redux/characters/characters.actions";
import { addCharacterToFavorites } from "../../redux/user/user.actions";

// Action Types
import CharactersTypes from "../../redux/characters/characters.constants";

const mapStateToProps = createStructuredSelector({
  characters: selectCharacters,
  hasMore: selectHasMore,
  isCharactersLoading: checkIfLoading(CharactersTypes.GET_CHARACTERS_START),
});

const mapDispatchToProps = (dispatch) => ({
  getCharactersStart: (page) => dispatch(getCharactersStart(page)),
  addCharacterToFavorites: (character) =>
    dispatch(addCharacterToFavorites(character)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterShowcase);
