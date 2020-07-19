import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

const LikeButton = ({ style: userStyles = {}, classNa }) => {
  const handleLikeClick = () => {
    console.log("Liked");
  };
  return (
    <button onClick={handleLikeClick}>
      <FavoriteBorderIcon />
    </button>
  );
};

export default LikeButton;
