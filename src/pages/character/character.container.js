import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { getCharacterStart } from "../../redux/character/character.actions";
import { selectCharacter } from "../../redux/character/character.selector";

import Character from "./character.component";

const mapStateToProps = createStructuredSelector({
  character: selectCharacter,
});

const mapDispatchToProps = (dispatch) => ({
  getCharacterStart: (characterId) => dispatch(getCharacterStart(characterId)),
});

const CharacterContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Character);

export default CharacterContainer;
