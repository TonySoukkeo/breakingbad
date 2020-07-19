import React from "react";
import PropTypes from "prop-types";

// Components
import List from "@material-ui/core/List";
import CharacterListItem from "../character-list-item/character-list-item.component";

const CharacterList = ({
  name,
  birthday,
  status,
  occupation,
  appearance,
  portrayed,
}) => {
  return (
    <List>
      <CharacterListItem label="Name" value={name} />

      <CharacterListItem label="DOB" value={birthday} />

      <CharacterListItem label="Status" value={status} />

      <CharacterListItem label="Occupation" value={occupation} type="array" />

      <CharacterListItem
        label="Season Appearances"
        value={appearance}
        type="array"
      />

      <CharacterListItem label="Portrayed by" value={portrayed} />
    </List>
  );
};

CharacterList.propTypes = {
  name: PropTypes.string,
  birthday: PropTypes.string,
  status: PropTypes.string,
  occupation: PropTypes.array,
  appearance: PropTypes.array,
  portrayed: PropTypes.string,
};

export default CharacterList;
