import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

// Styles
import HeartIconStyles from "./heart-icon.styles";

const HeartIcon = ({
  style: userStyles = {},
  className: userClassName = "",
}) => {
  const classes = HeartIconStyles();

  const classNames = [...Object.values(classes), userClassName]
    .join(" ")
    .trim();

  return <FavoriteBorderIcon style={userStyles} className={classNames} />;
};

export default HeartIcon;
