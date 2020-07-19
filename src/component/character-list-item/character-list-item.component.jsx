import React from "react";
import PropTypes from "prop-types";

// Components
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

// Custom hooks
import useValueType from "../../hooks/character-list/useValueType";

// Styles
import useStyles from "./character-list-item.style";

const CharacterListItem = ({ label, value, type = "string" }) => {
  const classes = useStyles();

  const listValue = useValueType(value, type);

  return (
    <ListItem>
      <ListItemText>
        <span className={classes.label}>{label}</span>: {listValue}
      </ListItemText>
    </ListItem>
  );
};

CharacterListItem.defaultProps = {
  value: [],
};

CharacterListItem.propTypes = {
  label: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  type: PropTypes.string,
};

export default CharacterListItem;
