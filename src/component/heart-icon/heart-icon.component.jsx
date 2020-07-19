import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const HeartIcon = ({
  style: userStyles = {},
  className: userClassName = "",
}) => {
  const classNames = [userClassName].join(" ").trim();

  return <FavoriteBorderIcon style={userStyles} className={classNames} />;
};

export default HeartIcon;
