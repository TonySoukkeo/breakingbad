import React, { useContext } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";

// Context
import LikeButtonContext from "../like-button/like-button.context";

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

  const setRefs = useContext(LikeButtonContext);

  return (
    <FavoriteIcon
      ref={setRefs}
      style={userStyles}
      className={classNames}
      data-refkey="heartIcon"
    />
  );
};

export default HeartIcon;
