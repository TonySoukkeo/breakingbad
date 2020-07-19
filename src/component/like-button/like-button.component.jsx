import React from "react";

// Components
import HeartIcon from "../heart-icon/heart-icon.component";

const LikeButton = ({ children, style: userStyles = {}, className }) => {
  const handleLikeClick = () => {
    console.log("Liked");
  };

  const classNames = [className].join(" ").trim();

  return (
    <button style={userStyles} className={classNames} onClick={handleLikeClick}>
      {children}
    </button>
  );
};

LikeButton.HeartIcon = HeartIcon;

export default LikeButton;
